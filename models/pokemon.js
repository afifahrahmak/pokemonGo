const pool = require("../config/connection.js");

class Pokemon {

  constructor(pokemon) {
    this.id = +pokemon.id;
    this.name = pokemon.name;
    this.type = pokemon.type;
  }

  static findAll(cb) {
    const query = 'SELECT * FROM "Pokemons"'
    pool.query(query, (err, result) => {
      if (err) {
        cb(err.message, null)
      } else {
        let data = result.rows
        const pokemons = data.map(element => {
          return new Pokemon(element)
        })
        cb(null, pokemons);
      }
    })
  }

  static findById(id, cb) {
    let query = `SELECT * FROM "Pokemons" WHERE id = ${id}`
    pool.query(query, (err, result) => {
      if (err) {
        cb(err.message, null);
      } else {
        cb(null, result.rows[0]);
      }
    })
  }

  static update(pokemon, cb) {
    let query = {
      text: `UPDATE "Pokemons" 
                  SET "name" = $2 ,
                      "type" = $3
                  WHERE "id" = $1`,
      values: Object.values(pokemon)
    }
    pool.query(query, (err, result) => {
      if (err) {
        cb(err.message);
      } else {
        cb(null);
      }
    })
  }
}

module.exports = Pokemon;