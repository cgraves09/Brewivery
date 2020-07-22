const db = require("../models");
// Defining methods for the brewController
module.exports = {
  create: function(req, res) {
    console.log(req.body)
    req.session.firstNam = req.body.firstNam;
    db.Client.create(req.body).then(dbModel => {
      res.json(dbModel)
      }).catch(err => console.log(err));
  },
  findOne: function(req,res) {
    console.log(req.params.email)
    db.Client.findOne({email: req.params.email}, (err, obj) => {
      console.log(err);
      console.log(obj);
      if (obj) {
        console.log('it exist')
        res.json({message: 'Account already exist'});
      }
      else {
          res.json({message: 'Account Created'});
      }
    })
  }
}