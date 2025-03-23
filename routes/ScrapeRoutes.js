const express = require("express");
const { getFakeProductDetails } = require("../controllers/ScrapeController");

const router = express.Router();

router.get("/", getFakeProductDetails);

module.exports = router;
