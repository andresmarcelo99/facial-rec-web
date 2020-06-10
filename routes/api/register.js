const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");

//load validation
const validateRegisterInput = require("../../validation/register");

//load client model
const ClientModel = require("../../models/clientModel");

// @route GET api/register/test
// @desc Test post route
// @access public route
router.get("/test", (req, res) => {
  res.json({ msg: "Register works" });
});

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
        company: req.body.company,
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

      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        host: "secure233.servconfig.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: "info@sidhn.com", // generated ethereal user
          pass: "HLqiV7F(lglu", // generated ethereal password
        },
      });

      // send mail with defined transport object
      let info = transporter.sendMail({
        from: '"SID" <info@sidhn.com>', // sender address
        to: `${newClient.email}, marcelo.andres99.ma@gmail.com`, // list of receivers
        subject: "Registration Confirmation", // Subject line
        text: `Hello, ${newClient.name} thank you for joining!`, // plain text body
        html: `<b>Hello, ${newClient.name} from ${newClient.company} thank you for joining!</b>`, // html body
      });

      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    }
  });
});

module.exports = router;
