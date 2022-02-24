import classNames from "classnames";
import React, { useState, useRef } from "react";
import ReactECharts from "echarts-for-react";
import { useCryptoTimeSeriesRangeData } from "../../queries";
import moment from "moment";

const unixNow = () => {
  return moment().unix();
};

const unixSubtractId = (id) => {
  return moment().subtract(id[0], id.substring(1)).unix();
};

function CompareChart() {
  const [timerange, setTimerange] = useState("6month");
  const chartRef = useRef(null);
  const cryptoQuery = useCryptoTimeSeriesRangeData(
    "solana",
    unixSubtractId(timerange),
    unixNow()
  );
  const cryptoQuery2 = useCryptoTimeSeriesRangeData(
    "avalanche-2",
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

function ToggleButton({ children, setActive, active, id }) {
  return (
    <button
      className={classNames(" px-3 py-2 rounded-md font-light", {
        "dark:bg-white dark:text-gray-800": active === id,
        "dark:bg-black dark:text-gray-400": active !== id,
      })}
      onClick={() => setActive(id)}
    >
      {children}
    </button>
  );
}

export default CompareChart;
