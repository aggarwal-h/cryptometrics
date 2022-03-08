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
import { Tabs, Tab } from "../components/tabs/Tab";
import {
  CollectionIcon,
  PlusIcon,
  TableIcon,
  XIcon,
} from "@heroicons/react/outline";
import { useState } from "react";
import useFilters from "../hooks/useFilters";
import { Filter, FilterButton, Filters } from "../components/filters/Filter";
import { FilterDropdown } from "../components/dropdown/FilterDropdown";

export default function Home() {
  const [filters, addFilter, removeFilter] = useFilters([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const listOfCoins = useCryptoList("usd", 21, false);
  const filteredCoins = listOfCoins.data
    ?.filter((coin) => {
      return coin.name.toLowerCase().includes(searchText.toLowerCase());
    })
    .map((coin) => {
      return (
        <CryptoChartCard
          key={coin.symbol}
          currencyId={coin.id}
          currencyName={coin.name}
          symbol={coin.symbol.toUpperCase()}
          icon={coin.image}
          info={"$" + numeral(coin.current_price).format("0,0.[0000000]")}
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
        <Sidebar active="home" />
        <Main>
          <Container>
            {/* Header */}
            <div className="flex flex-row justify-between">
              {/* Main Project Title */}
              <BoldGradientHeading>Home</BoldGradientHeading>
              {/* Search Field */}
              <SearchInput onChange={(e) => setSearchText(e?.target.value)} />
            </div>
            <div className="mb-2">
              <Filters>
                {filters.map((filter, idx) => {
                  return (
                    <Filter
                      key={"filter_" + idx}
                      subject={filter.subject}
                      condition={filter.condition}
                      value={filter.value}
                      buttonIcon={<XIcon className="w-5 h-5" />}
                      onButtonClick={() => removeFilter(filter)}
                    />
                  );
                })}
                <div className="relative">
                  <FilterButton
                    icon={<PlusIcon className="w-6 h-6" />}
                    onClick={() =>
                      setDropdownOpen(!dropdownOpen) && addFilter({})
                    }
                  />

                  {dropdownOpen && (
                    <FilterDropdown
                      open={dropdownOpen}
                      setOpen={setDropdownOpen}
                      addFilter={addFilter}
                    />
                  )}
                </div>
              </Filters>
            </div>

            {/* Main Content */}
            <Tabs>
              <Tab
                id="card-view"
                content={<CollectionIcon className="w-6 h-6 dark:text-white" />}
              >
                <div className="flex flex-wrap gap-x-10 gap-y-10 mt-3">
                  {!listOfCoins.isLoading && filteredCoins}
                </div>
              </Tab>
              <Tab
                id="list-view"
                content={<TableIcon className="w-6 h-6 dark:text-white" />}
              >
                {/* TODO: Add Table Component Here */}
                <div className="flex flex-wrap gap-x-10 gap-y-10 mt-3">
                  <h1 className="dark:text-white">TABLE</h1>
                </div>
              </Tab>
            </Tabs>
          </Container>
        </Main>
      </Wrapper>
    </div>
  );
}
