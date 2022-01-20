const Plateau = require("../helper/plateau");

class Rovers {
    constructor() { }
    static getRoute = (body) => {
        try {
            const output = Plateau.rovers(body);
            return output;
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    };
}

module.exports = Rovers;
