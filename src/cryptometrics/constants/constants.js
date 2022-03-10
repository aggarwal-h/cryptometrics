export const cryptoChartOptions = (colors = [], dark = false) => {
  return {
    chart: {
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
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
  price: {
    id: "price",
    name: "Price",
    options: {
      equals: {
        id: "equals",
        name: "is",
      },
      less_than: {
        id: "less_than",
        name: "is less than",
      },
      greater_than: {
        id: "greater_than",
        name: "is greater than",
      },
    },
  },
  name: {
    id: "name",
    name: "Name",
    options: {
      equals: {
        id: "equals",
        name: "is",
      },
      less_than: {
        id: "contains",
        name: "contains",
      },
    },
  },
  price_change_percentage: {
    id: "price_change_percentage",
    name: "Price Change in %",
    options: {
      equals: {
        id: "equals",
        name: "is",
      },
      less_than: {
        id: "less_than",
        name: "is less than",
      },
      greater_than: {
        id: "greater_than",
        name: "is greater than",
      },
    },
  },
};
