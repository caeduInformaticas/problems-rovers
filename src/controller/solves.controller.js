
const { TYPE_ROLE } = require("../const");
const { KEY } = require("../const");
const Rover = require("../model/rover.model");
const Request = require("../helper/request");
const mRover = new Map();
mRover.set(KEY.ROVERS, [Request.rovers, Rover.getRoute]);
exports.solveRovers = async (req, res) => {
    try {
        const { success, bodyParced } = mRover.get(KEY.ROVERS)[0](req.body);
        if (success) {
            const output = mRover.get(KEY.ROVERS)[1](bodyParced);
            let response = {
                success: true,
                output
            };
            res.send(response);
        }
    } catch (error) {
        console.error("_ERROR_", error.name + ": " + error.message);
        res.status(500).send({
            message: error.message,
        });
    }
};
