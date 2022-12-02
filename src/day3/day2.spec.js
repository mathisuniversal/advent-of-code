import {INPUT} from "./input.js";
import {solvePart1, solvePart2} from "./day2.js";

fdescribe("Day 2", () => {
    const input = INPUT.split('\n').map(i => i.split(' '));

    fit("should solve part 1", () => {
        expect(solvePart1(input)).toEqual(11666);
    });

    it("should solve part 2", () => {
        expect(solvePart2(input)).toEqual(12767);
    });
});