const express = require("express");
const router = express.Router();
const empController = require("../controller/user");

router.get("/home", empController.getHome);
router.get("/about", empController.getAbout);
router.get("/", empController.getWelcome);
router.get("/insertform", empController.getInsertForm);
router.post("/insertform", empController.postInsertForm);
router.get("/name/:slug", empController.getName);
router.get("/data", empController.getData);
router.post("/fetch", empController.postFetch);
router.post("/appdata", empController.postAppData);
router.get("/mydata", empController.getMyData);

module.exports = router;
