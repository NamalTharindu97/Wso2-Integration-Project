const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  password: {
    type: String,
  },
});

const Customer = mongoose.model("Customer", userSchema);

module.exports = Customer;
