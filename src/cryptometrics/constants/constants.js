export const cryptoChartOptions = (dark = false) => {
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
  };
};

export const cryptocurrencies = ["bitcoin"];
