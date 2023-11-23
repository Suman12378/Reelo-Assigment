const express = require("express");

const { getPaper } = require("../controllers/question-controller");

const setPaper = require("../controllers/set-controller");

const paperRouter = express.Router();

paperRouter.post("/", getPaper);
paperRouter.post("/set", setPaper);

module.exports = paperRouter;