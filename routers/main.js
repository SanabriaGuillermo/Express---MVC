const express = require("express");
const router = express.Router();
const controller = require("../controllers/mainControllers");

router.get("/", controller.index);
router.get("/about", controller.about);

module.exports = router;