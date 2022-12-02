// part 1
export function solvePart1(input) {
    let totalScore = 0;
    input.forEach(i => {
        totalScore += getPointsForMove(i[1]);
        totalScore += getPointsForResult(i[1], i[0]);
    });
    return totalScore;
}

// part 2
export function solvePart2(input) {
    let totalScore = 0;
    input.forEach(i => {
        totalScore += getPointsForForcedResult(i[1], i[0]);
    });
    return totalScore;
}

function getPointsForMove(move) {
    switch (move) {
        case 'X':
            return 1;
        case 'Y':
            return 2;
        case 'Z':
            return 3;
    }
}

function getPointsForResult(own, enemy) {
    if (own === 'X' && enemy === 'A') return 3;
    if (own === 'X' && enemy === 'B') return 0;
    if (own === 'X' && enemy === 'C') return 6;

    if (own === 'Y' && enemy === 'A') return 6;
    if (own === 'Y' && enemy === 'B') return 3;
    if (own === 'Y' && enemy === 'C') return 0;

    if (own === 'Z' && enemy === 'A') return 0;
    if (own === 'Z' && enemy === 'B') return 6;
    if (own === 'Z' && enemy === 'C') return 3;
}

function getPointsForForcedResult(own, enemy) {
    if (own === 'X' && enemy === 'A') return 3;
    if (own === 'X' && enemy === 'B') return 1;
    if (own === 'X' && enemy === 'C') return 2;

    if (own === 'Y' && enemy === 'A') return 4;
    if (own === 'Y' && enemy === 'B') return 5;
    if (own === 'Y' && enemy === 'C') return 6;

    if (own === 'Z' && enemy === 'A') return 8;
    if (own === 'Z' && enemy === 'B') return 9;
    if (own === 'Z' && enemy === 'C') return 7;
}