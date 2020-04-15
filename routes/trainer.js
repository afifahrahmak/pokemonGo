const router = require("express").Router()
const Controller = require("../controllers/trainerController");

router.get("/", Controller.findAll);

module.exports = router;