const Pokemon = require("../models/pokemon");

class PokemonController {
  static findAll(req, res) {
    Pokemon.findAll((err, data) => {
      if (err) {
        res.render("./pokemons/home", { error: err, pokemons: null });
      } else {
        res.render("./pokemons/home", { pokemons: data, error: null });
      }
    });
  }

  static getEditForm(req, res) {
    const { id } = req.params
    Pokemon.findById(id, (err, data) => {
      res.render('./pokemons/edit', { pokemon: data, error: err })
    })
  }

  static update(req, res) {
    const { name, type } = req.body;
    if (!name || !type) {
      let pokemon = {
        id: req.params.id,
        name: req.body.name,
        type: req.body.type
      }
      res.render('./pokemons/edit', { pokemon, error: 'field harus diisi' })
    } else {
      const { id } = req.params
      const newPokemon = { id, name, type };
      Pokemon.update(newPokemon, (err) => {
        if (err) {
          res.send(err);
        } else {
          res.redirect("/pokemons");
        }
      });
    }
  }
}

module.exports = PokemonController;