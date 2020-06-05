const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const passport = require("passport");

dotenv.config();

//load validation
const validateLoginInput = require("../../validation/login");

//load client model
const Client = require("../../models/clientModel");

// @route GET api/login/
// @desc   Login User/ returning jwt token
// @access public
router.post("/", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;

  //find the client by email
  Client.findOne({ email }).then((client) => {
    if (!client) {
      errors.mail = "User not found";
      return res.status(404).json({ errors });
    }
    //check password
    bcrypt.compare(password, client.password).then((isMatch) => {
      if (isMatch) {
        //user matched
        //create jwt payload
        const payload = {
          id: client.id,
          name: client.name,
        };
        //sign the token
        jwt.sign(
          payload,
          process.env.SECRETKEY,
          { expiresIn: 86400 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
            });
          }
        );
      } else {
        errors.password = "password incorrect";
        return res.status(400).json({ errors });
      }
    });
  });
});

module.exports = router;
