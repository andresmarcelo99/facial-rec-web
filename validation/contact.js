const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateContactInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.company = !isEmpty(data.company) ? data.company : "";
  data.phoneNumber = !isEmpty(data.phoneNumber) ? data.phoneNumber : "";

  if (Validator.isEmpty(data.name)) {
    errors.name = "Nombre es requerido";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email es invalido";
  }

  if (Validator.isEmpty(data.phoneNumber)) {
    errors.phoneNumber = "Telefono es requerido";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
