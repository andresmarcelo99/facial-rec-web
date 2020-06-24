const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.phone = !isEmpty(data.phone) ? data.phone : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Nombre debe ser entre 2 a 30 caracteres";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "Nombre es requerido";
  }

  if (Validator.isEmpty(data.phone)) {
    errors.phone = "Telefono es requerido";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email es requerido";
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email es invalido";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password es requerido";
  }
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password debe ser entre 6 a 30 caracteres";
  }

  // if (Validator.isEmpty(data.password2)) {
  //   errors.password2 = "Confirmar contraseña es requerido";
  // }
  // if (!Validator.equals(data.password, data.password2)) {
  //   errors.password2 = "Las contraseñas deben ser iguales";
  // }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
