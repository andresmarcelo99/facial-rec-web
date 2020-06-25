const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const { Pool } = require("pg");

const dotenv = require("dotenv").config();

//load validation
const validateRegisterInput = require("../../validation/register");

//load client model
const ClientModel = require("../../models/clientModel");

const pool = new Pool({
  host: "sid-db-instance.cjb79ibvsmnw.us-east-2.rds.amazonaws.com",
  user: "postgres",
  port: 5437,
  password: "copancopancopan",
  database: "postgres",
});

// @route GET api/register/test
// @desc Test post route
// @access public route
router.get("/test", (req, res) => {
  res.json({ msg: "Register works" });
});

// @route Post api/register
// @desc register post route
// @access public route
router.post("/", (req, res) => {
  let { user, password, name, email, phone } = req.body;
  const type = "Normal";
  const { errors, isValid } = validateRegisterInput(req.body);

  console.log(req.body);

  pool
    .query("SELECT EXISTS(SELECT 1 FROM clientes WHERE correo= $1)", [
      req.body.email,
    ])
    .then((response) => {
      if (response.rows[0].exists) {
        errors.emailExists = "Correo ya está registrado";
        return res.status(400).json(errors);
      }

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
          if (err) {
            throw err;
          } else {
            password = hash;
          }
        });

        pool
          .query(
            "INSERT INTO clientes(usuario, contraseña, nombre, estado, correo, telefono) VALUES ($1, $2, $3, $4, $5, $6)",
            [user, password, name, type, email, phone]
          )
          .then(() =>
            res.json({
              message: "Client Created",
              body: {
                user: { user, password, name, type, email, phone },
              },
            })
          )
          .catch((err) => res.send(err));
      });
    });

  //     // create reusable transporter object using the default SMTP transport
  //     let transporter = nodemailer.createTransport({
  //       host: "secure233.servconfig.com",
  //       port: 465,
  //       secure: true, // true for 465, false for other ports
  //       auth: {
  //         user: "info@sidhn.com", // generated ethereal user
  //         pass: "HLqiV7F(lglu", // generated ethereal password
  //       },
  //     });

  //     // send mail with defined transport object
  //     let info = transporter.sendMail({
  //       from: '"SID" <info@sidhn.com>', // sender address
  //       to: `${newClient.email}, marcelo.andres99.ma@gmail.com`, // list of receivers
  //       subject: "Registration Confirmation", // Subject line
  //       text: `Hello, ${newClient.name} thank you for joining!`, // plain text body
  //       html: `<b>Hello, ${newClient.name} from ${newClient.company} thank you for joining!</b>`, // html body
  //     });

  //     console.log("Message sent: %s", info.messageId);
  //     console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  //   }
  // });
});

module.exports = router;
