const { VALID, stringToArray, splitBySpace } = require("../const");

class Request {
    constructor() { }
    static rovers = (request) => {
        console.log('Reqest rovers',request);
        try {
            let res = {
                success: false,
                bodyParced: null
            };
            if ('topRight' in request && VALID._topRight(request.topRight)) {
                if ('firstPoint' in request && VALID._firstPoint(request.firstPoint)) {
                    if ('movesr1' in request && VALID._moves(request.movesr1)) {
                        if ('movesr2' in request && VALID._moves(request.movesr2)) {
                            res.success = true;
                            res.bodyParced = {
                                topRight : splitBySpace(request.topRight),
                                firstPoint : splitBySpace(request.firstPoint),
                                movesr1 : stringToArray(request.movesr1),
                                movesr2 : stringToArray(request.movesr2),

                            };
                        } else {
                            throw new Error('Error Moves2')
                        }
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

