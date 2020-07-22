const db = require("../models");

// Defining methods for the brewController
module.exports = {
  findAll: function(req, res) {
    db.Brewery
      .find()
      .then(dbModel => {
        res.json(dbModel)
        })
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Brewery
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
