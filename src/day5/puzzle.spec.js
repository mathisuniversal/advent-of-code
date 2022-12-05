import {INPUT} from "./input.js";
import {solvePart1, solvePart2} from "./puzzle.js";

describe("Day 4", () => {
    const input = INPUT.split('\n');

    it("should solve part 1", () => {
        expect(solvePart1(input)).toEqual('FJSRQCFTN');
    });

    fit("should solve part 2", () => {
        expect(solvePart2(input)).toEqual('CJVLJQPHS');
    });
});