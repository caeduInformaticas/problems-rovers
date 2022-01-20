const express = require("express");
const router = express.Router();
const solves = require("../controller/solves.controller");
router.post("/rovers", solves.solveRovers);
module.exports = router;