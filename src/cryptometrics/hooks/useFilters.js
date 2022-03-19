import { useState } from "react";

/**
 * Format of each filter should be:
 * {
 *  subject: "",
 *  condition: "",
 *  value: ""
 * }
 */
export function useFilters(initialArray) {
  const [filters, setFilters] = useState(initialArray);

  const checkIfFilterExists = (filter) => {
    for (let i = 0; i < filters.length; i++) {
      if (
        filters[i].subject === filter.subject &&
        filters[i].condition === filter.condition &&
        filters[i].value === filter.value
      ) {
        return true;
      }
    }
    return false;
  };

  const addFilter = (filter) => {
    // Check if filter already exists
    if (checkIfFilterExists(filter)) {
      return;
    }
    setFilters([...filters, filter]);
  };

  const removeFilter = (filter) => {
    setFilters(
      filters.filter(({ subject, condition, value }) => {
        return (
          subject !== filter.subject ||
          condition !== filter.condition ||
          value !== filter.value
        );
      })
    );
  };
  return [filters, addFilter, removeFilter];
}
