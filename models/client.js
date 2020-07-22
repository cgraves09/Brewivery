const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const clientSchema = new Schema({
  firstNam: {
    type: String,
    default: ''
  },
  lastNam: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    default: ''
  },
  phone: {
    type: String,
    default: ''
  },
  password: {
    type: String,
    default: ''
  },
  birthDate: {
    type: String,
    default: ''
  },
  cooler: [{
    beerName: String,
    beerType: String,
    beerPrice: Number    
  }

  ]

});
clientSchema.methods = {
  checkPassword: function (inputPassword) {
  return bcrypt.compareSync(inputPassword, this.password)
},
  hashPassword: plainTextPassword => {
  return bcrypt.hashSync(plainTextPassword, 10)
  }
}
clientSchema.pre('save', function (next) {
  if (!this.password) {
    console.log('models/user.js =======NO PASSWORD PROVIDED=======')
    next()
  } else {
    console.log('models/user.js hashPassword in pre save');
    this.password = this.hashPassword(this.password)
    next()
  }
})

const Client = mongoose.model("Client", clientSchema);
module.exports = Client;
