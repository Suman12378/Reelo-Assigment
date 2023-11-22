const express = require("express");

const { getPaper, setPaper } = require("../controllers/question-controller");

const paperRouter = express.Router();

paperRouter.post("/", getPaper);
paperRouter.post("/set", setPaper);

module.exports = paperRouter;