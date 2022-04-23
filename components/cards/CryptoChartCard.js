import React from "react";
import dynamic from "next/dynamic";
import PlaceholderSkeleton from "../skeletons/PlaceholderSkeleton";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useCryptoTimeSeriesData } from "../../queries";
import PropTypes from "prop-types";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

/**
 * Card component with an embedded chart for Crypto
 *
 * @component
 */
function CryptoChartCard({
  currencyName,
  currencyId,
  symbol,
  icon,
  info,
  detail,
  detailColor,
  options,
  type,
}) {
  const cryptoQuery = useCryptoTimeSeriesData(currencyId, 1, "hourly");
  return (
    <Link href={`/coins/${currencyId}`} passHref>
      <a className="w-full md:w-[47%] xl:w-[30.4%] hover:scale-[102%] cursor-pointer">
        <div className="rounded-3xl shadow-[0_8px_25px_rgba(0,0,0,7%)] dark:bg-dark-700">
          <div className="relative h-60">
            <div className="absolute top-0 right-0 left-0 bottom-0 z-10 rounded-3xl overflow-hidden">
              {options && type && (
                <Chart
                  options={options}
                  series={[
                    {
                      name: currencyId,
                      data:
                        cryptoQuery.data?.prices.filter((_, index) => {
                          return index % 8 == 0;
                        }) || [],
                    },
                  ]}
                  type={type}
                  width="100%"
                  height="100%"
                />
              )}
            </div>
            <div className="px-4 pt-4 pb-2 relative z-20 flex flex-col justify-between h-full">
              <div className="flex flex-row">
                <div className="mt-1 mr-2">
                  <Image
                    src={icon}
                    width="32px"
                    height="32px"
                    alt={`${currencyName}-icon`}
                    layout="fixed"
                  ></Image>
                </div>
                <div>
                  <p
                    className="text-3xl font-poppins font-bold text-gray-700 dark:text-gray-100"
                    id="currency-name"
                  >
                    {currencyName || (
                      <PlaceholderSkeleton className="h-9 w-[60%]" />
                    )}
                  </p>
                  <p
                    className="text-lg font-poppins font-medium text-gray-700 dark:text-gray-100"
                    id="currency-symbol"
                  >
                    {symbol}
                  </p>
                </div>
                <div className="ml-auto">
                  <div className="bg-neutral-100 dark:bg-white w-16 rounded-2xl mt-2">
                    <p className="text-center font-extrabold text-indigo-500">
                      24H
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col h-[9.5rem]">
                <div className="mt-auto">
                  <div className="flex justify-end">
                    <p
                      className="text-4xl font-poppins font-bold text-black dark:text-white"
                      id="currency-price"
                    >
                      {info || (
                        <PlaceholderSkeleton className="h-9 w-[200px]" />
                      )}
                    </p>
                  </div>
                  <div className="flex justify-end -mt-1">
                    <p
                      className={classNames(
                        "text-lg font-poppins font-bold",
                        detailColor
                      )}
                      id="currency-price-change-percentage"
                    >
                      {detail || <PlaceholderSkeleton className="h-4 w-20" />}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}

CryptoChartCard.propTypes = {
  /**
   * The name of the cryptocurrency
   */
  currencyName: PropTypes.string.isRequired,
  /**
   * The id of the cryptocurrency
   */
  currencyId: PropTypes.string.isRequired,
  /**
   * The symbol of the cryptocurrency
   */
  symbol: PropTypes.string.isRequired,
  /**
   * The icon for the cryptocurrency
   */
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /**
   * Any specific info for the cryptocurrency
   */
  info: PropTypes.string.isRequired,
  /**
   * The specific detail for the cryptocurrency
   */
  detail: PropTypes.string.isRequired,
  /**
   * A color for the detail text
   */
  detailColor: PropTypes.string.isRequired,
  /**
   * The options for the embedded chart
   */
  options: PropTypes.object.isRequired,
  /**
   * The type of the chart
   */
  type: PropTypes.string.isRequired,
};

export default CryptoChartCard;
