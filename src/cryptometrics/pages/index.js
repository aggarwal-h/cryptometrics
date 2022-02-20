import Head from "next/head";
import Container from "../components/content/Container";
import Main from "../components/content/Main";
import SearchInput from "../components/inputs/SearchInput";
import BoldGradientHeading from "../components/titles/BoldGradientHeading";
import CryptoChartCard from "../components/cards/CryptoChartCard";
import { cryptoChartOptions } from "../constants";
import { useCryptoList } from "../queries";
import numeral from "numeral";
import Wrapper from "../components/content/Wrapper";
import Sidebar from "../components/sidebar/Sidebar";

export default function Home() {
  const listOfCoins = useCryptoList("usd", 5, false);
  const filteredCoins = listOfCoins.data?.map((coin) => {
    return (
      <CryptoChartCard
        key={coin.symbol}
        currencyId={coin.id}
        currencyName={coin.name}
        symbol={coin.symbol.toUpperCase()}
        icon={coin.image}
        info={"$" + numeral(coin.current_price).format("0,0.[00]")}
        detail={
          numeral(coin.price_change_percentage_24h).format("+0.0[00]") + "%"
        }
        detailColor={
          coin.price_change_percentage_24h > 0
            ? "text-green-500"
            : "text-red-500"
        }
        options={cryptoChartOptions(
          coin.price_change_percentage_24h > 0 ? ["#3DBAA2"] : ["#FF7A68"],
          true
        )}
        type="area"
      />
    );
  });
  return (
    <div>
      <Head>
        <title>CryptoMetrics</title>
        <meta name="description" content="CryptoMetrics" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <Sidebar />
        <Main>
          <Container>
            {/* Header */}
            <div className="flex flex-row justify-between">
              {/* Main Project Title */}
              <BoldGradientHeading>Home</BoldGradientHeading>
              {/* Search Field */}
              <SearchInput />
            </div>

            <div className="flex flex-wrap gap-x-10 gap-y-10 mt-10">
              {!listOfCoins.isLoading && filteredCoins}
            </div>
          </Container>
        </Main>
      </Wrapper>
    </div>
  );
}
