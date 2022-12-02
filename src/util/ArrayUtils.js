export function sum(array) {
    return array.reduce((pv, cv) => Number.parseInt(pv) + Number.parseInt(cv), 0);
}

export function max(array) {
    array = array.map(val => Number.parseInt(val));
    return Math.max(...array);
}

export function sortDescending(array) {
    return array.sort((a, b) => (Number.parseInt(b) - Number.parseInt(a)));
}