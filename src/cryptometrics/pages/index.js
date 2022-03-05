import React, { useState } from "react";
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
import { CollectionIcon, TableIcon } from "@heroicons/react/outline";
import { Table, TableCell, TableRow } from "../components/table/Table";
import Image from "next/image";
import CryptoRowLineChart from "../components/charts/CryptoRowLineChart";
import classNames from "classnames";
import Link from "next/link";

export default function Home() {
  const [searchText, setSearchText] = useState("");
  const listOfCoins = useCryptoList("usd", 21, false);
  const filteredCoins = listOfCoins.data?.filter((coin) => {
    return coin.name.toLowerCase().includes(searchText.toLowerCase());
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

            {/* Main Content */}
            <Tabs>
              <Tab
                id="card-view"
                content={<CollectionIcon className="w-6 h-6 dark:text-white" />}
              >
                <div className="flex flex-wrap gap-x-10 gap-y-10 mt-3">
                  {!listOfCoins.isLoading &&
                    filteredCoins.map((coin) => {
                      return (
                        <CryptoChartCard
                          key={coin.symbol}
                          currencyId={coin.id}
                          currencyName={coin.name}
                          symbol={coin.symbol.toUpperCase()}
                          icon={coin.image}
                          info={
                            "$" +
                            numeral(coin.current_price).format("0,0.[0000000]")
                          }
                          detail={
                            numeral(coin.price_change_percentage_24h).format(
                              "+0.0[00]"
                            ) + "%"
                          }
                          detailColor={
                            coin.price_change_percentage_24h > 0
                              ? "text-green-500"
                              : "text-red-500"
                          }
                          options={cryptoChartOptions(
                            coin.price_change_percentage_24h > 0
                              ? ["#3DBAA2"]
                              : ["#FF7A68"],
                            true
                          )}
                          type="area"
                        />
                      );
                    })}
                </div>
              </Tab>
              <Tab
                id="list-view"
                content={<TableIcon className="w-6 h-6 dark:text-white" />}
              >
                <Table>
                  {!listOfCoins.isLoading &&
                    filteredCoins.map((coin, index) => {
                      return (
                        <Link
                          key={"table_row_" + index}
                          href={`/coins/${coin.id}`}
                          passHref
                        >
                          <a>
                            <TableRow>
                              <TableCell className="w-6">
                                <Image
                                  src={coin.image}
                                  width="32px"
                                  height="32px"
                                  alt={`${coin.id}_icon`}
                                  layout="fixed"
                                ></Image>
                              </TableCell>
                              <TableCell className="w-24">
                                <p className="font-medium text-base text-center">
                                  {coin.name}
                                </p>
                                <p className="font-light text-gray-300 text-sm mt-1">
                                  {coin.symbol.toUpperCase()}
                                </p>
                              </TableCell>
                              <TableCell className="w-24">
                                <p className="font-medium text-base">Price</p>
                                <p className="font-light text-sm text-blue-500 mt-1">
                                  $
                                  {numeral(coin.current_price).format(
                                    "0,0.[0000000]"
                                  )}
                                </p>
                              </TableCell>
                              <TableCell className="w-[10%]">
                                <p className="font-medium text-base">
                                  Market Cap
                                </p>
                                <p className="font-light text-sm text-pink-400 mt-1">
                                  $
                                  {numeral(coin.market_cap).format(
                                    "0,0.[000]a"
                                  )}
                                </p>
                              </TableCell>
                              <TableCell className="w-40">
                                <p className="font-medium text-base">
                                  24h change in %
                                </p>
                                <p
                                  className={classNames(
                                    "font-light text-sm mt-1",
                                    {
                                      "text-red-400":
                                        coin.price_change_percentage_24h < 0,
                                      "text-green-400":
                                        coin.price_change_percentage_24h >= 0,
                                    }
                                  )}
                                >
                                  {numeral(
                                    coin.price_change_percentage_24h
                                  ).format("+0.0[00]")}
                                  %
                                </p>
                              </TableCell>
                              <TableCell className="w-40">
                                <p className="font-medium text-base">
                                  24h change in $
                                </p>
                                <p
                                  className={classNames(
                                    "font-light text-sm mt-1",
                                    {
                                      "text-red-400": coin.price_change_24h < 0,
                                      "text-green-400":
                                        coin.price_change_24h >= 0,
                                    }
                                  )}
                                >
                                  {numeral(coin.price_change_24h).format(
                                    "$0,0.[0000]"
                                  )}
                                </p>
                              </TableCell>
                              <TableCell>
                                <div className="h-[50px] w-52">
                                  <CryptoRowLineChart
                                    currencyId={coin.id}
                                    color={
                                      coin.price_change_24h >= 0
                                        ? "#10B981"
                                        : "#EF4444"
                                    }
                                  />
                                </div>
                              </TableCell>
                            </TableRow>
                          </a>
                        </Link>
                      );
                    })}
                </Table>
              </Tab>
            </Tabs>
          </Container>
        </Main>
      </Wrapper>
    </div>
  );
}
