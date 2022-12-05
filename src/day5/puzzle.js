const CRATES = [
    'QHCTNSVB',
    'GBDW',
    'BQSTRWF',
    'NDJZSWGL',
    'FVDPM',
    'JWF',
    'VJBQNL',
    'NSQJCRTG',
    'MDWCQSJ'
];

// part 1
export function solvePart1(input) {
    const crates = new Crates(CRATES);
    input.forEach((row) => {
        const instructions = row.split(' ');
        const count = parseInt(instructions[1]);
        const from = parseInt(instructions[3]);
        const to = parseInt(instructions[5]);
        crates.move(from, to, count);
    });
    return crates.getTopCrates();
}

// part 2
export function solvePart2(input) {
    const crates = new Crates(CRATES);
    input.forEach((row) => {
        const instructions = row.split(' ');
        const count = parseInt(instructions[1]);
        const from = parseInt(instructions[3]);
        const to = parseInt(instructions[5]);
        crates.moveAll(from, to, count);
    });
    return crates.getTopCrates();
}

class Crates {
    crates;

    constructor(crates) {
        this.crates = crates.map(v => (Array.from(v)));
    }

    move(from, to, count) {
        if (count < 1) {
            return;
        }
        const crate = this.crates[from - 1].shift();
        this.crates[to - 1].unshift(crate);
        this.move(from, to, count - 1)
    }

    moveAll(from, to, count) {
        const crates = this.crates[from - 1].splice(0, count);
        this.crates[to - 1] = crates.concat(this.crates[to - 1]);
    }

    getTopCrates() {
        return this.crates.map(v => (v[0])).join('');
    }
}