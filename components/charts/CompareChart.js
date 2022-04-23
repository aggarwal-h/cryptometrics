import React, { useState, useRef } from "react";
import ReactECharts from "echarts-for-react";
import { useCryptoList, useCryptoTimeSeriesRangeData } from "../../queries";
import moment from "moment";
import { ToggleButton } from "../button";
import Dropdown from "../dropdown/Dropdown";
import { ChevronDoubleRightIcon } from "@heroicons/react/outline";
import {
  FcScatterPlot,
  FcCandleSticks,
  FcBarChart,
  FcLineChart,
} from "react-icons/fc";
import { numberOfChartsToLoad } from "../../constants";

const unixNow = () => {
  return moment().unix();
};

const unixSubtractId = (id) => {
  return moment().subtract(id[0], id.substring(1)).unix();
};

const reorderCandlestickData = (data) => {
  if (!data) {
    return null;
  }
  const newData = [];
  for (let i = 0; i < data.length; i++) {
    newData.push([data[i][0], data[i][1], data[i][4], data[i][3], data[i][2]]);
  }
  return newData;
};

function CompareChart({ singleChart, selectionDisabled, selectedCurrency }) {
  const [timerange, setTimerange] = useState("6month");
  const [chartType, setChartType] = useState("line");
  const chartRef = useRef(null);
  const listOfCoins = useCryptoList("usd", numberOfChartsToLoad, false);
  const [firstCrypto, setFirstCrypto] = useState(
    selectedCurrency ? selectedCurrency : "solana"
  );
  const [secondCrypto, setSecondCrypto] = useState("avalanche-2");
  const cryptoQuery = useCryptoTimeSeriesRangeData(
    firstCrypto,
    unixSubtractId(timerange),
    unixNow(),
    chartType === "candlestick"
  );
  const cryptoQuery2 = useCryptoTimeSeriesRangeData(
    secondCrypto,
    unixSubtractId(timerange),
    unixNow(),
    chartType === "candlestick"
  );

  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      bottom: 30,
      right: 10,
      top: 10,
      left: 50,
    },
    dataZoom: [
      {
        type: "inside",
      },
    ],
    xAxis: {
      type: "time",
      silent: false,
      splitLine: {
        show: false,
      },
      splitArea: {
        show: false,
      },
    },
    yAxis: {
      type: "value",
      splitArea: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
    series: [
      {
        type: chartType,
        data:
          chartType === "candlestick" && cryptoQuery.data
            ? reorderCandlestickData(cryptoQuery.data)
            : cryptoQuery.data?.prices,
        name: firstCrypto,
        smooth: true,
        symbol: chartType === "scatter" ? "circle" : "none",
        symbolSize: 7,
        lineStyle: {
          width: 3,
          shadowOffsetY: 1,
          color: "#3590F3",
          shadowColor: "#1F51FF",
          shadowOffsetX: 1,
          shadowBlur: 10,
        },
        itemStyle:
          chartType === "candlestick"
            ? {
                color0: "#DE5E57",
                color: "#51A49A",
                borderColor0: "#DE5E57",
                borderColor: "#51A49A",
              }
            : undefined,
      },
      {
        type: chartType,
        data: singleChart
          ? null
          : chartType === "candlestick" && cryptoQuery2.data
          ? reorderCandlestickData(cryptoQuery2.data)
          : cryptoQuery2.data?.prices,
        name: secondCrypto,
        smooth: true,
        symbol: chartType === "scatter" ? "circle" : "none",
        symbolSize: 7,
        lineStyle: {
          width: 3,
          shadowOffsetY: 0,
          color: "#06D6A0",
          shadowColor: "#39FF14",
          shadowOffsetX: 1,
          shadowBlur: 10,
        },
        itemStyle:
          chartType === "candlestick"
            ? {
                color: "rgba(85, 69, 255, 1)",
                color0: "#EE7147",
                borderColor: "rgba(85, 69, 255, 1)",
                borderColor0: "#EE7147",
              }
            : undefined,
      },
    ],
  };

  return (
    <div className="bg-white shadow-lg dark:bg-dark-600 p-8 rounded-3xl overflow-x-hidden">
      <div className="flex flex-col justify-center xl:justify-between xl:flex-row items-center space-y-3 xl:space-y-0 xl:space-x-12">
        <div className="flex flex-row space-x-3 sm:space-x-6 md:space-x-10 xl:space-x-2">
          <ToggleButton
            id="1hour"
            active={timerange}
            setActive={setTimerange}
            tooltip="1 Hour"
          >
            1H
          </ToggleButton>
          <ToggleButton
            id="1day"
            active={timerange}
            setActive={setTimerange}
            tooltip="1 Day"
          >
            1D
          </ToggleButton>
          <ToggleButton
            id="1week"
            active={timerange}
            setActive={setTimerange}
            tooltip="1 Week"
          >
            1W
          </ToggleButton>
          <ToggleButton
            id="1month"
            active={timerange}
            setActive={setTimerange}
            tooltip="1 Month"
          >
            1M
          </ToggleButton>
          <ToggleButton
            id="6month"
            active={timerange}
            setActive={setTimerange}
            tooltip="6 Months"
          >
            6M
          </ToggleButton>
          <ToggleButton
            id="1year"
            active={timerange}
            setActive={setTimerange}
            tooltip="1 Year"
          >
            1Y
          </ToggleButton>
        </div>

        <div className="flex flex-row space-x-2 sm:space-x-6 md:space-x-10 xl:space-x-2">
          <ToggleButton
            id="line"
            active={chartType}
            setActive={setChartType}
            tooltip="Line"
          >
            <FcLineChart size={"1.6em"} />
          </ToggleButton>
          <ToggleButton
            id="bar"
            active={chartType}
            setActive={setChartType}
            tooltip="Bar"
          >
            <FcBarChart size={"1.6em"} />
          </ToggleButton>
          <ToggleButton
            id="scatter"
            active={chartType}
            setActive={setChartType}
            tooltip="Scatter"
          >
            <FcScatterPlot size={"1.6em"} />
          </ToggleButton>
          <ToggleButton
            id="candlestick"
            active={chartType}
            setActive={setChartType}
            tooltip="Candlestick"
          >
            <FcCandleSticks size={"1.6em"} />
          </ToggleButton>
        </div>
        {!selectionDisabled && (
          <div className="flex flex-row space-x-3 sm:space-x-6 md:space-x-10 xl:space-x-3 items-center">
            <Dropdown
              list={listOfCoins.isLoading ? [] : listOfCoins.data}
              value={firstCrypto}
              setValue={setFirstCrypto}
              disabled={[secondCrypto]}
              buttonId="first-dropdown"
            />
            <ChevronDoubleRightIcon className="w-5 h-5 dark:text-gray-300" />
            <Dropdown
              list={listOfCoins.isLoading ? [] : listOfCoins.data}
              value={secondCrypto}
              setValue={setSecondCrypto}
              disabled={[firstCrypto]}
              buttonId="second-dropdown"
            />
          </div>
        )}
      </div>
      <div className="h-[600px] mt-10">
        <ReactECharts
          ref={chartRef}
          option={option}
          style={{
            height: "100%",
          }}
        />
      </div>
    </div>
  );
}

export default CompareChart;
