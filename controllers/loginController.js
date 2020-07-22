const db = require("../models");
// Defining methods for the brewController
module.exports = {
  create: function(req, res) {
    req.session.firstNam = req.body.firstNam;
    db.Client.create(req.body).then(dbModel => {
      res.json(dbModel)
      }).catch(err => console.log(err));
  },
}