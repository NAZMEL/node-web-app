const express = require("express");
const {getMainPage} = require("../controllers/main-controller");

const router = express.Router();

router.get("/", getMainPage);

module.exports = router;

