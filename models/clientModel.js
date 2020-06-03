const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  clientType: {
    type: String,
    default: "normal",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = clientModel = mongoose.model("clients", ClientSchema);
