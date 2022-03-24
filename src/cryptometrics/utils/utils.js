export function less_than_number(a, b) {
  return Number(a) < Number(b);
}

export function equals_integer(a, b) {
  return parseInt(a) === parseInt(b);
}

export function greater_than_number(a, b) {
  return Number(a) > Number(b);
}

export function equals_string(a, b) {
  return a.toLowerCase() === b.toLowerCase();
}

export function contains_string(a, b) {
  return a.toLowerCase().includes(b.toLowerCase());
}

export function getCoin(list, id) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].id == id) {
      return list[i];
    }
  }
  return null;
}

export function sort_by_price_low_to_high(a, b) {
  if (Number(a.current_price) < Number(b.current_price)) {
    return -1;
  } else if (Number(a.current_price) > Number(b.current_price)) {
    return 1;
  }
  return 0;
}

export function sort_by_price_high_to_low(a, b) {
  if (Number(a.current_price) > Number(b.current_price)) {
    return -1;
  } else if (Number(a.current_price) < Number(b.current_price)) {
    return 1;
  }
  return 0;
}

export function sort_by_name_ascending(a, b) {
  if (String(a.name) < String(b.name)) {
    return -1;
  } else if (String(a.name) > String(b.name)) {
    return 1;
  }
  return 0;
}

export function sort_by_name_descending(a, b) {
  if (String(a.name) > String(b.name)) {
    return -1;
  } else if (String(a.name) < String(b.name)) {
    return 1;
  }
  return 0;
}

export function sort_by_price_change_percentage_low_to_high(a, b) {
  if (
    Number(a.price_change_percentage_24h) <
    Number(b.price_change_percentage_24h)
  ) {
    return -1;
  } else if (
    Number(a.price_change_percentage_24h) >
    Number(b.price_change_percentage_24h)
  ) {
    return 1;
  }
  return 0;
}

export function sort_by_price_change_percentage_high_to_low(a, b) {
  if (
    Number(a.price_change_percentage_24h) >
    Number(b.price_change_percentage_24h)
  ) {
    return -1;
  } else if (
    Number(a.price_change_percentage_24h) <
    Number(b.price_change_percentage_24h)
  ) {
    return 1;
  }
  return 0;
}
