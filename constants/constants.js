import {
  less_than_number,
  greater_than_number,
  equals_string,
  equals_integer,
  contains_string,
  sort_by_name_ascending,
  sort_by_name_descending,
  sort_by_price_low_to_high,
  sort_by_price_high_to_low,
  sort_by_price_change_percentage_low_to_high,
  sort_by_price_change_percentage_high_to_low,
} from "../utils";

export const numberOfChartsToLoad = 21;

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
  sort_by: {
    id: "sort_by",
    name: "Sort by",
    input_enabled: false,
    options: {
      name_ascending: {
        id: "name_ascending",
        name: "Name: Ascending Order",
        function: sort_by_name_ascending,
      },
      name_descending: {
        id: "name_descending",
        name: "Name: Descending Order",
        function: sort_by_name_descending,
      },
      price_low_to_high: {
        id: "price_low_to_high",
        name: "Price: Low to High",
        function: sort_by_price_low_to_high,
      },
      price_high_to_low: {
        id: "price_high_to_low",
        name: "Price: High to Low",
        function: sort_by_price_high_to_low,
      },
      price_change_percentage_low_to_high: {
        id: "price_change_percentage_low_to_high",
        name: "Price Change %: Low to High",
        function: sort_by_price_change_percentage_low_to_high,
      },
      price_change_percentage_high_to_low: {
        id: "price_change_percentage_high_to_low",
        name: "Price Change %: High to Low",
        function: sort_by_price_change_percentage_high_to_low,
      },
    },
  },
  current_price: {
    id: "current_price",
    name: "Price",
    input_enabled: true,
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
    input_enabled: true,
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
    input_enabled: true,
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
    input_enabled: true,
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
