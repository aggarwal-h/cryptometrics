import React, { useState, useRef, useCallback } from "react";
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
import { Tabs, Tab } from "../components/tabs";
import {
  CollectionIcon,
  PlusIcon,
  TableIcon,
  XIcon,
} from "@heroicons/react/outline";
import { useFilters, useOnClickOutside } from "../hooks";
import { Filter, Filters } from "../components/filters";
import FilterDropdown from "../components/dropdown/FilterDropdown";
import { filterOptions } from "../constants";
import { Table, TableCell, TableHeader, TableRow } from "../components/table";
import Image from "next/image";
import CryptoRowLineChart from "../components/charts/CryptoRowLineChart";
import classNames from "classnames";
import Link from "next/link";
import { FilterButton } from "../components/button";
import DropdownItem from "../components/dropdown/DropdownItem";
import Highlighter from "react-highlight-words";

export default function Home() {
  const [filters, addFilter, removeFilter] = useFilters([]);
  const filterDropdownRef = useRef(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [suggestedSearchOpen, setSuggestedSearchOpen] = useState(false);
  const callbackDropdownClose = useCallback(() => setDropdownOpen(false), []);
  useOnClickOutside(filterDropdownRef, callbackDropdownClose);
  const [searchText, setSearchText] = useState("");
  const listOfCoins = useCryptoList("usd", 21, false);

  // Filter coins based on search
  let filteredCoins = listOfCoins.data?.filter((coin) => {
    return coin.name.toLowerCase().includes(searchText.toLowerCase());
  });

  // Apply filters
  for (let i = 0; i < filters.length; i++) {
    const { subject, condition, value } = filters[i];
    if (subject === "sort_by") {
      filteredCoins = filteredCoins.sort(
        filterOptions[subject]?.options[condition]?.function
      );
    } else {
      filteredCoins = filteredCoins.filter((coin) => {
        return filterOptions[subject]?.options[condition]?.function(
          coin[subject],
          value
        );
      });
    }
  }

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
              <div className="relative">
                {/* Search Field */}
                <SearchInput
                  onChange={(e) => setSearchText(e?.target.value)}
                  initialValue={searchText}
                  value={searchText}
                  onFocus={() => setSuggestedSearchOpen(true)}
                  onBlur={() => setSuggestedSearchOpen(false)}
                />
                {suggestedSearchOpen && (
                  <div className="absolute h-fit max-h-72 min-w-[9rem] w-full bg-dark-500 top-12 left-0 rounded-xl z-50 overflow-y-scroll">
                    <div className="my-2">
                      {filteredCoins.length > 0 ? (
                        filteredCoins?.map((coin, index) => {
                          return (
                            <DropdownItem
                              onClick={() => setSearchText(coin.name)}
                              key={index}
                            >
                              <Highlighter
                                searchWords={[searchText]}
                                autoEscape={true}
                                textToHighlight={coin.name}
                              />
                            </DropdownItem>
                          );
                        })
                      ) : (
                        <DropdownItem disabled>No results</DropdownItem>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="mb-2">
              <Filters>
                {filters.map((filter, idx) => {
                  return (
                    <Filter
                      key={"filter_" + idx}
                      subject={filterOptions[filter.subject]?.name}
                      condition={
                        filterOptions[filter.subject]?.options[filter.condition]
                          ?.name
                      }
                      value={filter.value}
                      symbolLeft={filterOptions[filter.subject]?.symbol_left}
                      symbolRight={filterOptions[filter.subject]?.symbol_right}
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
                      dropdownRef={filterDropdownRef}
                      setOpen={setDropdownOpen}
                      addFilter={addFilter}
                      filterOptions={Object.keys(filterOptions)
                        .filter(
                          (option) =>
                            filters.filter(
                              (filter) => filter.subject === option
                            ).length === 0
                        )
                        .reduce((obj, key) => {
                          obj[key] = filterOptions[key];
                          return obj;
                        }, {})}
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
                  {/* Table Header */}
                  <TableHeader className="h-14 items-center sticky top-0 z-40">
                    <TableCell className="w-6 h-10 text-center">Icon</TableCell>
                    <TableCell className="w-24 h-10">
                      <p className="font-medium text-base text-center">Name</p>
                    </TableCell>
                    <TableCell className="w-24 h-10">
                      <p className="font-medium text-base text-center">Price</p>
                    </TableCell>
                    <TableCell className="w-[10%] h-10">
                      <p className="font-medium text-base text-center">
                        Market Cap
                      </p>
                    </TableCell>
                    <TableCell className="w-40 h-10">
                      <p className="font-medium text-base text-center">
                        24h change in %
                      </p>
                    </TableCell>
                    <TableCell className="w-40 h-10">
                      <p className="font-medium text-base text-center">
                        24h change in $
                      </p>
                    </TableCell>
                    <TableCell className="h-10">
                      <div className="w-52">
                        <p className="font-medium text-base text-center">
                          Chart
                        </p>
                      </div>
                    </TableCell>
                  </TableHeader>

                  {/* Table Content */}
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
                                <p className="font-light text-base text-blue-500 mt-1">
                                  $
                                  {numeral(coin.current_price).format(
                                    "0,0.[0000000]"
                                  )}
                                </p>
                              </TableCell>
                              <TableCell className="w-[10%]">
                                <p className="font-light text-base text-pink-400 mt-1">
                                  $
                                  {numeral(coin.market_cap).format(
                                    "0,0.[000]a"
                                  )}
                                </p>
                              </TableCell>
                              <TableCell className="w-40">
                                <p
                                  className={classNames(
                                    "font-light text-base mt-1",
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
                                <p
                                  className={classNames(
                                    "font-light text-base mt-1",
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
