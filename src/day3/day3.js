// part 1
export function solvePart1(input) {
    let sum = 0;
    input.forEach(backpack => {
        let compartment1 = backpack.substring(0, backpack.length / 2);
        let compartment2 = backpack.substring(backpack.length / 2, backpack.length);
        const commonItemType = getCommonCharacter(compartment1, compartment2);
        sum += getPriorityOfItemType(commonItemType);
    });
    return sum;
}

// part 2
export function solvePart2(input) {
    let sum = 0;
    for (let i = 0; i <= input.length - 3; i += 3) {
        const badge = getCommonCharacterIn3(input[i], input[i + 1], input[i + 2]);
        sum += getPriorityOfItemType(badge);
    }
    return sum;
}

function getPriorityOfItemType(itemType) {
    const values = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return values.indexOf(itemType) + 1;
}

function getCommonCharacter(string1, string2) {
    for (let i = 0; i < string1.length; i++) {
        for (let j = 0; j < string2.length; j++) {
            if (string1[i] === string2[j]) {
                return string1[i];
            }
        }
    }
}

function getCommonCharacterIn3(string1, string2, string3) {
    for (let i = 0; i < string1.length; i++) {
        for (let j = 0; j < string2.length; j++) {
            for (let k = 0; k < string3.length; k++) {
                if (string1[i] === string2[j] && string2[j] === string3[k]) {
                    return string1[i];
                }
            }
        }
    }
}