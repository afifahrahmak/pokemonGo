const Trainer = require("../models/trainer");

class TrainerController {
  static findAll(req, res) {
    Trainer.findAll((err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.render("./trainers/home", { trainers: data, error: null });
      }
    });
  }

}

module.exports = TrainerController;