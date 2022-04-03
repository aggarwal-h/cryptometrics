import React from "react";
import Head from "next/head";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios";
import Navbar from "../../components/navbar/Navbar";
import Wrapper from "../../components/content/Wrapper";
import BoldGradientHeading from "../../components/titles/BoldGradientHeading";
import ErrorPage from "next/error";
import Main from "../../components/content/Main";
import Container from "../../components/content/Container";
import { useCryptoDetail } from "../../queries";
import CompareChart from "../../components/charts/CompareChart";
import ReactHtmlParser from "react-html-parser";
import numeral from "numeral";
import classNames from "classnames";
import PlaceholderSkeleton from "../../components/skeletons/PlaceholderSkeleton";

export default function DetailPage({ errorStatus, cryptocurrency }) {
  const coinDetail = useCryptoDetail(cryptocurrency);
  if (errorStatus) {
    return <ErrorPage statusCode={errorStatus} />;
  }
  return (
    <div>
      <Head>
        <title>CryptoMetrics</title>
        <meta name="description" content="CryptoMetrics" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Wrapper>
        <Sidebar />
        <Main>
          <Container>
            {/* Header */}
            <div className="flex flex-row justify-between mb-4">
              {/* Main Project Title */}
              <BoldGradientHeading>
                {coinDetail.data?.name ? (
                  coinDetail.data?.name
                ) : (
                  <PlaceholderSkeleton className="h-7 w-52" />
                )}
              </BoldGradientHeading>
            </div>

            <div className="flex flex-row flex-wrap justify-around xl:flex-nowrap bg-white dark:bg-dark-600 shadow-lg rounded-3xl py-4 px-4 space-x-4 font-poppins mb-4">
              <div className="flex flex-col hover:bg-gray-100 dark:hover:bg-dark-900 justify-center items-center p-4 rounded-2xl w-[10%] min-w-fit">
                <p className="dark:text-white text-3xl font-semibold">
                  {coinDetail.data?.name ? (
                    coinDetail.data?.symbol?.toUpperCase()
                  ) : (
                    <PlaceholderSkeleton className="h-7 w-20" />
                  )}
                </p>
                <p className="dark:text-white text-sm font-light">
                  {coinDetail.data?.name ? (
                    coinDetail.data?.name
                  ) : (
                    <PlaceholderSkeleton className="h-3 w-16" />
                  )}
                </p>
              </div>
              <div className="flex flex-col hover:bg-gray-100 dark:hover:bg-dark-900 justify-center items-center p-4 rounded-2xl w-[20%] min-w-fit">
                <p className="dark:text-indigo-500 text-3xl font-semibold">
                  {coinDetail.data?.market_data?.current_price?.usd ? (
                    numeral(
                      coinDetail.data?.market_data?.current_price?.usd
                    ).format("$0,0.[0000000]")
                  ) : (
                    <PlaceholderSkeleton className="h-7 w-32" />
                  )}
                </p>
                <p className="dark:text-white text-sm font-light">USD</p>
              </div>
              <div className="flex flex-col hover:bg-gray-100 dark:hover:bg-dark-900 justify-center items-center p-4 rounded-2xl w-[20%] min-w-fit">
                <p
                  className={classNames("text-3xl font-semibold", {
                    "text-green-500":
                      coinDetail.data?.market_data
                        ?.price_change_percentage_24h >= 0,
                    "text-red-500":
                      coinDetail.data?.market_data
                        ?.price_change_percentage_24h < 0,
                  })}
                >
                  {coinDetail.data?.market_data ? (
                    numeral(
                      coinDetail.data?.market_data?.price_change_percentage_24h
                    ).format("+0.0[00]%")
                  ) : (
                    <PlaceholderSkeleton className="h-7 w-32" />
                  )}
                </p>
                <p className="dark:text-white text-sm font-light">
                  24h change %
                </p>
              </div>
              <div className="flex flex-col hover:bg-gray-100 dark:hover:bg-dark-900 justify-center items-center p-4 rounded-2xl w-[20%] min-w-fit">
                <p
                  className={classNames("text-3xl font-semibold", {
                    "text-green-500":
                      coinDetail.data?.market_data?.price_change_24h >= 0,
                    "text-red-500":
                      coinDetail.data?.market_data?.price_change_24h < 0,
                  })}
                >
                  {coinDetail.data?.market_data?.price_change_24h ? (
                    numeral(
                      coinDetail.data?.market_data?.price_change_24h
                    ).format("$0,0.[0000]")
                  ) : (
                    <PlaceholderSkeleton className="h-7 w-32" />
                  )}
                </p>
                <p className="dark:text-white text-sm font-light">
                  24h change in $
                </p>
              </div>
              <div className="flex flex-col hover:bg-gray-100 dark:hover:bg-dark-900 justify-center items-center p-4 rounded-2xl w-[30%] min-w-fit">
                <p className="dark:text-white text-3xl font-semibold">
                  {coinDetail.data?.market_data?.total_volume?.usd ? (
                    numeral(
                      coinDetail.data?.market_data?.total_volume?.usd
                    ).format("$0,0.[0000000]")
                  ) : (
                    <PlaceholderSkeleton className="h-7 w-52" />
                  )}
                </p>
                <p className="dark:text-white text-sm font-light">
                  Total volume
                </p>
              </div>
            </div>
            <div className="text-white mb-4 bg-white dark:bg-dark-600 rounded-3xl p-4 shadow-lg">
              <p className="text-black dark:text-white text-2xl font-semibold font-poppins px-4 pb-4">
                Description
              </p>
              <p
                className="text-black dark:text-white px-4"
                id="crypto-description"
              >
                {coinDetail.data ? (
                  coinDetail.data?.description?.en === "" ? (
                    "No description available."
                  ) : (
                    ReactHtmlParser(
                      coinDetail.data?.description?.en.replaceAll(
                        "https://www.coingecko.com/en/coins/",
                        "/coins/"
                      )
                    )
                  )
                ) : (
                  <span className="flex flex-col space-y-2">
                    <PlaceholderSkeleton className="h-7 w-full" />
                    <PlaceholderSkeleton className="h-7 w-11/12" />
                    <PlaceholderSkeleton className="h-7 w-10/12" />
                    <PlaceholderSkeleton className="h-7 w-9/12" />
                  </span>
                )}
              </p>
            </div>
            <CompareChart
              singleChart={true}
              selectionDisabled={true}
              selectedCurrency={cryptocurrency}
            />
          </Container>
        </Main>
      </Wrapper>
    </div>
  );
}

DetailPage.getInitialProps = async ({ query }) => {
  let errorStatus = null;
  const queryCoin = await axios
    .get(
      `https://api.coingecko.com/api/v3/coins/${query.coin}?localization=false&tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false`
    )
    .catch((err) => {
      errorStatus = 404;
    });
  return {
    cryptocurrency: query.coin,
    errorStatus: errorStatus,
  };
};
