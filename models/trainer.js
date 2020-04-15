const pool = require("../config/connection.js")

class Trainer {
  constructor(trainer) {
    this.id = +trainer.id
    this.firstName = trainer.firstName
    this.lastName = trainer.lastName
    this.age = trainer.age
    this.points = trainer.points
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  static findAll(cb) {
    const query = `SELECT * FROM "Trainers"`
    pool.query(query, (err, result) => {
      if (err) {
        cb(err.message, null)
      } else {
        let data = result.rows
        const trainers = data.map((element) => {
          return new Trainer(element)
        })
        cb(null, trainers)
      }
    })
  }


}

module.exports = Trainer