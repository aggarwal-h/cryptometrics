import React from "react";
import PlaceholderSkeleton from "../../skeletons/PlaceholderSkeleton";
import classNames from "classnames";

function CryptoChartCardSkeleton() {
  return (
    <div className="w-full md:w-[47%] xl:w-[30.6%] hover:scale-[102%] cursor-pointer">
      <div className="rounded-3xl shadow-[0_8px_25px_rgba(0,0,0,7%)] dark:bg-dark-700">
        <div className="relative h-60">
          <div className="p-4 relative z-20">
            <div className="flex flex-row">
              <div className="mr-2">
                <PlaceholderSkeleton className="h-9 w-10" />
              </div>
              <div>
                <p
                  className="text-3xl font-poppins font-bold text-gray-700 dark:text-gray-100"
                  id="currency-name"
                >
                  <PlaceholderSkeleton className="h-9 w-56" />
                </p>
                <p
                  className="text-lg font-poppins font-medium text-gray-700 dark:text-gray-100"
                  id="currency-symbol"
                >
                  <PlaceholderSkeleton className="h-9 w-20" />
                </p>
              </div>
              <div className="ml-auto">
                <div className="w-16 rounded-2xl mt-2">
                  <p className="text-center font-extrabold text-indigo-500">
                    <PlaceholderSkeleton className="h-4 w-10" />
                  </p>
                </div>
              </div>
            </div>
            {/* TODO: Find a way to change height below so it is auto-adjusted to fit content */}
            <div className="flex flex-col h-[8rem]">
              <div className="mt-auto">
                <div className="flex justify-end">
                  <p
                    className="text-4xl font-poppins font-bold text-black dark:text-white"
                    id="currency-price"
                  >
                    {<PlaceholderSkeleton className="h-9 w-[200px]" />}
                  </p>
                </div>
                <div className="flex justify-end -mt-1">
                  <p
                    className={classNames(
                      "text-lg font-poppins font-bold text-green"
                    )}
                    id="currency-price-change-percentage"
                  >
                    <PlaceholderSkeleton className="h-4 w-20" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CryptoChartCardSkeleton;
