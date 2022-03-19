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
