import axios from "axios";
import moment from "moment";
import { useQuery } from "react-query";
import toast from "react-hot-toast";

export function useCryptoTimeSeriesData(name, days = 7, interval = "daily") {
  const toastId = "timeseries-api";
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
      staleTime: 5 * 60000, // 5 minutes
      onSuccess: () => {
        toast.dismiss(toastId);
      },
      onError: () => {
        toast.error("There was an error fetching the data.", {
          id: toastId,
        });
      },
    }
  );
}

export function useCryptoTimeSeriesRangeData(
  name,
  from,
  to,
  candlestick = false
) {
  const toastId = "timeseries-timerange-api";
  let url = `https://api.coingecko.com/api/v3/coins/${name}/market_chart/range?vs_currency=usd&from=${from}&to=${to}`;
  if (candlestick) {
    const validDays = [1, 7, 14, 30, 90, 180, 365];
    const requestedDays = moment.unix(to).diff(moment.unix(from), "days");
    const finalDays = validDays.reduce((prev, curr) =>
      Math.abs(curr - requestedDays) < Math.abs(prev - requestedDays)
        ? curr
        : prev
    );
    url = `https://api.coingecko.com/api/v3/coins/${name}/ohlc?vs_currency=usd&days=${finalDays}`;
  }
  return useQuery(
    `${name}_from_${from}_to_${to}_${
      candlestick ? "with" : "without"
    }_candlestick`,
    () => {
      return axios.get(url).then((res) => res.data);
    },
    {
      refetchOnWindowFocus: false,
      staleTime: 5 * 60000, // 5 minutes
      onSuccess: () => {
        toast.dismiss(toastId);
      },
      onError: () => {
        toast.error("There was an error fetching the data.", {
          id: toastId,
        });
      },
    }
  );
}

export function useCryptoList(
  currency = "usd",
  numberOfCurrencies = 20,
  sparkline = true
) {
  const toastId = "list-api";
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
      staleTime: 5 * 60000, // 5 minutes
      onSuccess: () => {
        toast.dismiss(toastId);
      },
      onError: () => {
        toast.error("There was an error fetching the data.", {
          id: toastId,
        });
      },
    }
  );
}

export function useCryptoDetail(currencyId) {
  const toastId = "detail-api";
  return useQuery(
    `${currencyId}-detail`,
    () => {
      return axios
        .get(
          `https://api.coingecko.com/api/v3/coins/${currencyId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
        )
        .then((res) => res.data);
    },
    {
      refetchOnWindowFocus: false,
      staleTime: 5 * 60000, // 5 minutes
      onSuccess: () => {
        toast.dismiss(toastId);
      },
      onError: () => {
        toast.error("There was an error fetching the data.", {
          id: toastId,
        });
      },
    }
  );
}
