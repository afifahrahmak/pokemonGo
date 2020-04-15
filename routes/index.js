
const router = require("express").Router()
const pokemonRoutes = require("./pokemon");
const trainerRoutes = require("./trainer");

router.get("/", (req, res) => {
  res.render('index')
})
router.use("/pokemons", pokemonRoutes);
router.use("/trainers", trainerRoutes);


module.exports = router;