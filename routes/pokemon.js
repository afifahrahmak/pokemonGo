const router = require("express").Router();
const Controller = require("../controllers/pokemonController");


router.get("/", Controller.findAll);
router.get("/edit/:id", Controller.getEditForm);
router.post("/edit/:id", Controller.update);

module.exports = router;