const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");

//load validation
const validateRegisterInput = require("../../validation/register");

//load client model
const ClientModel = require("../../models/clientModel");

// @route GET api/register/test
// @desc Test post route
// @access public route
router.get("/test", (req, res) => res.json({ msg: "Register works" }));

// @route GET api/register/test
// @desc Test post route
// @access public route
router.post("/", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  ClientModel.findOne({
    email: req.body.email,
  }).then((client) => {
    if (client) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newClient = new ClientModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newClient.password, salt, (err, hash) => {
          if (err) {
            throw err;
          } else {
            newClient.password = hash;
            newClient
              .save()
              .then((client) => res.json(client))
              .catch((err) => console.log(err));
          }
        });
      });
    }
  });
});

module.exports = router;
