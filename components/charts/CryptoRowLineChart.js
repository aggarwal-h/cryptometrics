import React, { useRef } from "react";
import ReactECharts from "echarts-for-react";
import { cryptoLineChartOptions } from "../../constants";
import { useCryptoTimeSeriesData } from "../../queries";

function CryptoRowLineChart({ currencyId, color }) {
  const cryptoQuery = useCryptoTimeSeriesData(currencyId, 1, "hourly");
  const chartRef = useRef(null);
  return (
    <ReactECharts
      ref={chartRef}
      option={cryptoLineChartOptions(cryptoQuery.data?.prices, color)}
      style={{
        height: "100%",
      }}
    />
  );
}

export default CryptoRowLineChart;
