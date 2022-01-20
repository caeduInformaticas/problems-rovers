const KEY = {
    ROVERS: 'ROVERS',
    NORTH: 'N',
    SUDTH: 'S',
    EAST: 'E',
    WEST: 'W'
};
const COMMAND = {
    LEFT: 'L',
    RIGHT: 'R',
    MOVE: 'M'
};
const isString = (param) => {
    return typeof param === 'string';
};
const splitBySpace = (data) => {
    return data.split(/\s+/);
}
const stringToArray = (param) => {
    return Array.from(param);
};
const VALID = {
    _topRight(data) {
        let res = false;
        if (isString(data)) {
            const coor = splitBySpace(data);
            console.log(coor);
            if (coor.length >= 1 && naturalNumer(coor[0]) && naturalNumer(coor[1])) {
                res = true;
            }
        }
        return res;
    },
    _firstPoint(data) {
        let res = false;
        if (isString(data)) {
            const coor = splitBySpace(data);
            console.log(coor);
            if (coor.length >= 2 && naturalNumer(coor[0]) && naturalNumer(coor[1]) && isString(coor[1])) {
                res = true;
            }
        }
        return res;
    },
    _moves(data) {
        let res = false;
        if (isString(data)) {
            const arrayString =  stringToArray(data);
            for (let i = 0; i < arrayString.length; i++) {
                const move = arrayString[i];
                if (move === COMMAND.LEFT || move === COMMAND.RIGHT || move === COMMAND.MOVE) {
                    res = true;
                }
            }
        }
        return res;
    }
}
const naturalNumer = (data) => {
    let res = false;
    if (typeof data === "string") {
        const newNumber = Number(data);
        if (typeof newNumber === "number" && newNumber > 0) {
            res = true;
        }
    }
    if (typeof data === "number") {
        res = true;
    }
    return res;
};
/* module.exports = {
}; */
module.exports = Object.freeze({
    KEY,
    COMMAND,
    VALID,
    splitBySpace,
    stringToArray
});
