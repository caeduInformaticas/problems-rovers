const Navigate = require("../helper/navigate");

const { COMMAND} = require("../const");

class Plateau {
    constructor() { }
    static rovers = (data) => {
        try {
            const topRight = data.topRight;
            const firstPoint = data.firstPoint;
            const comands = data.movesr1;
            const newNavigation = new Navigate(firstPoint[2], firstPoint[0], firstPoint[1], topRight[0], topRight[1]);
            for (let i = 0; i < comands.length; i++) {
                let _c = comands[i];
                /* if (typeof _c !== 'number') {
                    _c = Number(_c);
                } */
                newNavigation._storageMoves(_c);
                if (_c === COMMAND.LEFT) {
                    newNavigation._updateorientation(_c, i);
                }
                if (_c === COMMAND.RIGHT) {
                    newNavigation._updateorientation(_c, i);
                }
                if (_c === COMMAND.MOVE) {
                    newNavigation._move(_c);
                    newNavigation._updatemCurrentCardinalDir();
                }
                newNavigation._storagePoints();
                const points = newNavigation._getCoorPoints();
                console.log( points);
            }
            console.log('output: ',newNavigation._buildOutput());
            return newNavigation._buildOutput();
        } catch (error) {
            throw new Error(error);
        }

    }

}
module.exports = Plateau;

