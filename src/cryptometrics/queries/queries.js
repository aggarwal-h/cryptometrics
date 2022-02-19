import axios from "axios";
import { useQuery } from "react-query";

export function useCryptoTimeSeriesData(name, days = 7, interval = "daily") {
  return useQuery(
    `${name}_${days}_days`,
    () => {
      return axios
        .get(
          `https://api.coingecko.com/api/v3/coins/${name}/market_chart?vs_currency=usd&days=${days}&interval=${interval}`
        )
        .then((res) => res.data);
    },
    {
      refetchOnWindowFocus: false,
    }
  );
}

export function useCryptoList(
  currency = "usd",
  numberOfCurrencies = 20,
  sparkline = true
) {
  return useQuery(
    `list_of_${numberOfCurrencies}_currencies_in_${currency}_${
      sparkline ? "with" : "without"
    }_sparkline`,
    () => {
      return axios
        .get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${numberOfCurrencies}&page=1&sparkline=${sparkline}`
        )
        .then((res) => res.data);
    },
    {
      refetchOnWindowFocus: false,
    }
  );
}
