import {
  less_than_number,
  greater_than_number,
  equals_string,
  equals_integer,
  contains_string,
} from "../utils";

export const cryptoChartOptions = (
  colors = [],
  dark = false,
  animationsEnabled = false
) => {
  return {
    chart: {
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
      animations: {
        enabled: animationsEnabled,
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 0.9,
        opacityFrom: dark ? 0.9 : 0.7,
        opacityTo: dark ? 0.4 : 0.9,
        stops: [0, 100],
        shade: dark ? "dark" : "light",
      },
    },
    xaxis: {
      type: "datetime",
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      tickAmount: 3,
      floating: false,
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    grid: {
      show: false,
      padding: {
        top: 2,
        right: 0,
        bottom: 0,
        left: -10,
      },
    },
    stroke: {
      curve: "smooth",
    },
    tooltip: {
      enabled: false,
    },
    colors: colors,
  };
};

export const cryptoLineChartOptions = (seriesData = [], color = "#3590F3") => {
  return {
    grid: {
      bottom: 10,
      right: 10,
      top: 10,
      left: 10,
    },
    xAxis: {
      show: false,
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
      show: false,
      type: "value",
      splitArea: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      min: "dataMin",
      max: "dataMax",
    },
    series: [
      {
        type: "line",
        data: seriesData,
        name: "Solana",
        smooth: true,
        symbol: "none",
        lineStyle: {
          width: 3,
          shadowOffsetY: -1,
          color: color,
          shadowColor: color,
          shadowOffsetX: 0,
          shadowBlur: 5,
          cap: "round",
          opacity: 1,
        },
        animation: false,
      },
      {
        type: "scatter",
        data: seriesData.slice(-1),
        name: "ABC",
        smooth: true,
        symbol: "circle",
        symbolSize: 20,
        itemStyle: {
          shadowOffsetY: 0,
          color: color,
          shadowColor: color,
          shadowOffsetX: 0,
          shadowBlur: 15,
          opacity: 0.1,
        },
        animation: false,
      },
    ],
  };
};

export const cryptocurrencies = [
  {
    id: "bitcoin",
    symbol: "btc",
    name: "Bitcoin",
  },
  {
    id: "ethereum",
    symbol: "eth",
    name: "Ethereum",
  },
  {
    id: "tether",
    symbol: "usdt",
    name: "Tether",
  },
  { id: "binancecoin", symbol: "bnb", name: "BNB" },
  {
    id: "usd-coin",
    symbol: "usdc",
    name: "USD Coin",
  },
  {
    id: "ripple",
    symbol: "xrp",
    name: "XRP",
  },
  {
    id: "cardano",
    symbol: "ada",
    name: "Cardano",
  },
];

export const filterOptions = {
  current_price: {
    id: "current_price",
    name: "Price",
    input_type: "number",
    symbol_left: "$",
    options: {
      equals: {
        id: "equals",
        name: "is (approximately)",
        function: equals_integer,
      },
      less_than: {
        id: "less_than",
        name: "is less than",
        function: less_than_number,
      },
      greater_than: {
        id: "greater_than",
        name: "is greater than",
        function: greater_than_number,
      },
    },
  },
  name: {
    id: "name",
    name: "Name",
    input_type: "text",
    options: {
      equals: {
        id: "equals",
        name: "is",
        function: equals_string,
      },
      less_than: {
        id: "contains",
        name: "contains",
        function: contains_string,
      },
    },
  },
  price_change_percentage_24h: {
    id: "price_change_percentage_24h",
    name: "Price Change in %",
    symbol_right: "%",
    input_type: "number",
    options: {
      equals: {
        id: "equals",
        name: "is (approximately)",
        function: equals_integer,
      },
      less_than: {
        id: "less_than",
        name: "is less than",
        function: less_than_number,
      },
      greater_than: {
        id: "greater_than",
        name: "is greater than",
        function: greater_than_number,
      },
    },
  },
  price_change_24h: {
    id: "price_change_24h",
    name: "Price Change in $",
    input_type: "number",
    symbol_left: "$",
    options: {
      equals: {
        id: "equals",
        name: "is (approximately)",
        function: equals_integer,
      },
      less_than: {
        id: "less_than",
        name: "is less than",
        function: less_than_number,
      },
      greater_than: {
        id: "greater_than",
        name: "is greater than",
        function: greater_than_number,
      },
    },
  },
};
