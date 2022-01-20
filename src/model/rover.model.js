const Navigate = require("../helper/navigate");
const { COMMAND } = require("../const");

class Rovers {
    constructor() { }
    static getRoute = async (body) => {
        try {
            /* onst topRiht = [body.topRight[0], body.topRight[1]];
            const startPoint = [body.firstPoint[0], body.firstPoint[1], body.firstPoint[2]];
            const moves1 = body.movesr1;
            const moves2 = body.movesr2; */
            const topRiht = [5, 5];
            //const startPoint = [4, 3, 'E'];
            const startPoint = [1, 2, 'N'];
            //const comands = ['R','R','M'];
            //const comands = ['M','M','M'];
            //const comands = ['M', 'M', 'R', 'M', 'M', 'R', 'M', 'R', 'R', 'M'];
            const comands = ['L', 'M', 'L', 'M', 'L', 'M', 'L', 'M', 'M'];

            const newNavigation = new Navigate(startPoint[2], startPoint[0], startPoint[1], topRiht[0], topRiht[1]);
            console.log('newNavigation ', newNavigation);
            for (let i = 0; i < comands.length; i++) {
                const _c = comands[i];
                console.log('COMANDS___ ', _c);
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
                console.log(_c, ' : ', 'Current: ', newNavigation.mCurrentCardinalDir, 'Next: ', newNavigation.mNextCardinalDir, ':', points);

            }
            comands.forEach((_c) => {
            });
            const output = newNavigation._buildOutput();
            console.log(output);
            return output;
        } catch (error) {
            console.log(error);
            throw new Error("Error de base de datos");
        }
    };
}

module.exports = Rovers;
