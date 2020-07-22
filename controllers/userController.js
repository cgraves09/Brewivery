const db = require("../models");
// Defining methods for the brewController
module.exports = {
    update: function(req, res) {
        let item = {'beerName': req.body.cooler.beerName, 'beerType': req.body.cooler.beerType, 'beerPrice': req.body.cooler.beerPrice };
        db.Client.findOneAndUpdate(req.body.id, {"$push": {"cooler": item}}, {"new": true})
        .then(dbModel => {
           res.json(dbModel); 
        })

    },
    findAll: function(req, res) {
        console.log('Beer\n\n\n')
        console.log(req.user.id)
        db.Client.findById({"_id": req.user.id}).then(dbModel => {
        res.json(dbModel);
        console.log(dbModel)
        })
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
      console.log(`User Id ${req.user.id}`);
      console.log(`Item ${req.params.id}`)
        db.Client.findOneAndUpdate(req.user.id, {$pull: {cooler: {_id: req.params.id}}})
        .then(dbModel => {
            console.log('removed')
           res.json(dbModel); 
        })
  }
}