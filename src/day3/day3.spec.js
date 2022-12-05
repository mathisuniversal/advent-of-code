import {INPUT} from "./input.js";
import {solvePart1, solvePart2} from "./day3.js";

describe("Day 3", () => {
    const input = INPUT.split('\n');

    it("should solve part 1", () => {
        expect(solvePart1(input)).toEqual(7742);
    });

    it("should solve part 2", () => {
        expect(solvePart2(input)).toEqual(2276);
    });
});