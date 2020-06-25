const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const { Pool } = require("pg");

const dotenv = require("dotenv").config();

const pool = new Pool({
  host: "sid-db-instance.cjb79ibvsmnw.us-east-2.rds.amazonaws.com",
  user: "postgres",
  port: 5437,
  password: "copancopancopan",
  database: "postgres",
});

//load validation
const validateLoginInput = require("../../validation/login");

//load client model
const Client = require("../../models/clientModel");

// @route GET api/login/
// @desc   Login User/ returning jwt token
// @access public
router.post("/", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  const { email, password } = req.body;
  pool
    .query("SELECT * FROM clientes WHERE correo = $1", [email])
    .then((response) => {
      if (response.rows[0].correo === email) {
        //check password
        bcrypt
          .compare(password, response.rows[0].contraseña)
          .then((isMatch) => {
            if (isMatch) {
              //user matched
              //create jwt payload
              const payload = {
                user: response.rows[0].usuario,
                name: response.rows[0].nombre,
              };
              //sign the token
              jwt.sign(
                payload,
                process.env.SECRET,
                { expiresIn: 86400 },
                (err, token) => {
                  res.json({
                    success: true,
                    token: "Bearer " + token,
                    currentClient: {
                      user: response.rows[0].usuario,
                      name: response.rows[0].nombre,
                      email: email,
                    },
                  });
                }
              );
            } else {
              errors.password = "password incorrect";
              return res.status(400).json({ errors });
            }
          });
      }
    })
    .catch((err) => {
      errors.emailDoesntExist = "Correo no encontrado";
      return res.status(404).json(errors);
    });

  // if (!isValid) {
  //   return res.status(400).json(errors);
  // }

  // //find the client by email
  // Client.findOne({ email }).then((client) => {
  //   if (!client) {
  //     errors.mail = "User not found";
  //     return res.status(404).json({ errors });
  //   }
  //   //check password
  //   bcrypt.compare(password, client.password).then((isMatch) => {
  //     if (isMatch) {
  //       //user matched
  //       //create jwt payload
  //       const payload = {
  //         id: client.id,
  //         name: client.name,
  //       };
  //       //sign the token
  //       jwt.sign(
  //         payload,
  //         process.env.SECRET,
  //         { expiresIn: 86400 },
  //         (err, token) => {
  //           res.json({
  //             success: true,
  //             token: "Bearer " + token,
  //             currentClient: {
  //               _id: client._id,
  //               name: client.name,
  //               email: client.email,
  //               company: client.company,
  //             },
  //           });
  //         }
  //       );
  //     } else {
  //       errors.password = "password incorrect";
  //       return res.status(400).json({ errors });
  //     }
  //   });
  // });
});

module.exports = router;
