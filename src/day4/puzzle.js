// part 1
export function solvePart1(input) {
    let contains = 0;
    input.forEach(i => {
        if (isContainedIn(i[0], i[1]) || isContainedIn(i[1], i[0])) {
            contains++;
        }
    });
    return contains;
}

// part 2
export function solvePart2(input) {
    let overlaps = 0;
    input.forEach(i => {
        if (rangesOverlap(i[0], i[1])) {
            overlaps++;
        }
    });
    return overlaps;
}

function isContainedIn(range1, range2) {
    const range1Boundaries = parseRangeBoundaries(range1);
    const range2Boundaries = parseRangeBoundaries(range2);
    return range1Boundaries[0] >= range2Boundaries[0] && range1Boundaries[1] <= range2Boundaries[1];
}

function rangesOverlap(range1, range2) {
    const range1Boundaries = parseRangeBoundaries(range1);
    const range2Boundaries = parseRangeBoundaries(range2);
    return Math.max(...range1Boundaries) >= Math.min(...range2Boundaries) &&
        Math.min(...range1Boundaries) <= Math.max(...range2Boundaries);
}

function parseRangeBoundaries(rangeString) {
    return rangeString.split('-').map(v => parseInt(v)).filter(v => !isNaN(v));
}