const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const brewerySchema = new Schema({
  thumbnail: String,
  beer: String,
  address: String,
  phone: String,
  website: String,
  lat: Number,
  lng: Number,
  beers: [{
    size: String,
    name: String,
    price: Number
    
  }],
  rating: String,
  date: { type: Date, default: Date.now }
});

const Brewery = mongoose.model("Brewery", brewerySchema);

module.exports = Brewery;
