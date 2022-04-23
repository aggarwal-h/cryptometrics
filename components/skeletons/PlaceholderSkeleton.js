import React from "react";
import classNames from "classnames";

function PlaceholderSkeleton({ className }) {
  return (
    <span
      className={classNames(
        `skeleton-box inline-block rounded-md ${className}`
      )}
    ></span>
  );
}

export default PlaceholderSkeleton;
