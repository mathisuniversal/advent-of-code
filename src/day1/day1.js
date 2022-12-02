import {INPUT} from "./input.js";
import {max, sortDescending, sum} from "../util/ArrayUtils.js";

const input = INPUT.split('\n\n').map(i => i.split('\n'));

// part 1
const maxCalories = max(input.map(sum));
console.warn("Part 1: " + maxCalories);

// part 2
const top3MaxCalories = sum(sortDescending(input.map(sum)).slice(0, 3));
console.warn("Part 2: " + top3MaxCalories);
