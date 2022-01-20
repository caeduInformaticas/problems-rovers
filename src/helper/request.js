const { VALID, stringToArray, splitBySpace, parceToNumber } = require("../const");

class Request {
    constructor() { }
    static rovers = (request) => {
        try {
            let res = {
                success: false,
                bodyParced: null
            };
            if ('topRight' in request && VALID._topRight(request.topRight)) {
                if ('firstPoint' in request && VALID._firstPoint(request.firstPoint)) {
                    if ('movesr1' in request && VALID._moves(request.movesr1)) {
                        res.success = true;
                        const bodyParced = {
                            topRight: splitBySpace(request.topRight),
                            firstPoint: splitBySpace(request.firstPoint),
                            movesr1: stringToArray(request.movesr1),
                        };
                        bodyParced.topRight[0] =parceToNumber(bodyParced.topRight[0]);
                        bodyParced.topRight[1] = parceToNumber(bodyParced.topRight[1]);
                        bodyParced.firstPoint[0] = parceToNumber(bodyParced.firstPoint[0]);
                        bodyParced.firstPoint[1] =parceToNumber(bodyParced.firstPoint[1]);
                        res.bodyParced = bodyParced;
                    } else {
                        throw new Error('Error Moves1');
                    }
                } else {

                    throw new Error('Error firstPoint');
                }
            } else {
                throw new Error('Error TopRight');
            }
            return res;
        } catch (error) {
            throw new Error(error);
        }
    }
}
module.exports = Request;

