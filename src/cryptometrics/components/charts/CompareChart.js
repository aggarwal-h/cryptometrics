import React, { useState, useRef } from "react";
import ReactECharts from "echarts-for-react";
import { useCryptoList, useCryptoTimeSeriesRangeData } from "../../queries";
import moment from "moment";
import { ToggleButton } from "../button/ToggleButton";
import Dropdown from "../dropdown/Dropdown";
import { ChevronDoubleRightIcon } from "@heroicons/react/outline";

const unixNow = () => {
  return moment().unix();
};

const unixSubtractId = (id) => {
  return moment().subtract(id[0], id.substring(1)).unix();
};

function CompareChart() {
  const [timerange, setTimerange] = useState("6month");
  const chartRef = useRef(null);
  const listOfCoins = useCryptoList("usd", 21, false);
  const [firstCrypto, setFirstCrypto] = useState("solana");
  const [secondCrypto, setSecondCrypto] = useState("ethereum");
  const cryptoQuery = useCryptoTimeSeriesRangeData(
    firstCrypto,
    unixSubtractId(timerange),
    unixNow()
  );
  const cryptoQuery2 = useCryptoTimeSeriesRangeData(
    secondCrypto,
    unixSubtractId(timerange),
    unixNow()
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
        type: "line",
        data: cryptoQuery.data?.prices,
        name: "Solana",
        smooth: true,
        symbol: "none",
        lineStyle: {
          width: 3,
          shadowOffsetY: 1,
          color: "#3590F3",
          shadowColor: "#1F51FF",
          shadowOffsetX: 1,
          shadowBlur: 10,
        },
      },
      {
        type: "line",
        data: cryptoQuery2.data?.prices,
        name: "Avalanche",
        smooth: true,
        symbol: "none",
        lineStyle: {
          width: 3,
          shadowOffsetY: 0,
          color: "#06D6A0",
          shadowColor: "#39FF14",
          shadowOffsetX: 1,
          shadowBlur: 10,
        },
      },
    ],
  };

  return (
    <div className="dark:bg-dark-600 p-8 rounded-3xl">
      <div className="flex flex-row space-x-3">
        <ToggleButton id="1hour" active={timerange} setActive={setTimerange}>
          1H
        </ToggleButton>
        <ToggleButton id="1day" active={timerange} setActive={setTimerange}>
          1D
        </ToggleButton>
        <ToggleButton id="1week" active={timerange} setActive={setTimerange}>
          1W
        </ToggleButton>
        <ToggleButton id="1month" active={timerange} setActive={setTimerange}>
          1M
        </ToggleButton>
        <ToggleButton id="6month" active={timerange} setActive={setTimerange}>
          6M
        </ToggleButton>
        <ToggleButton id="1year" active={timerange} setActive={setTimerange}>
          1Y
        </ToggleButton>

        <div className="flex-1">{/* Space Fillter */}</div>

        <div className="flex flex-row space-x-5 items-center">
          <Dropdown
            list={listOfCoins.isLoading ? [] : listOfCoins.data}
            value={firstCrypto}
            setValue={setFirstCrypto}
            disabled={[secondCrypto]}
          />
          <ChevronDoubleRightIcon className="w-5 h-5 dark:text-gray-300" />
          <Dropdown
            list={listOfCoins.isLoading ? [] : listOfCoins.data}
            value={secondCrypto}
            setValue={setSecondCrypto}
            disabled={[firstCrypto]}
          />
        </div>
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
