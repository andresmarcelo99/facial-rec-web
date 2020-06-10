const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

//load validation
const validateContactInput = require("../../validation/contact");

router.post("/", (req, res) => {
  const { errors, isValid } = validateContactInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

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

  const text = `Cliente de ${req.body.company}\n Nombre: ${req.body.name} 
        \n Email: ${req.body.email} \n Tel: ${req.body.phoneNumber}`;

  // send mail with defined transport object
  let info = transporter.sendMail({
    from: '"SID-newContact" <info@sidhn.com>', // sender address
    to: "info@sidhn.com, marcelo.andres99.ma@gmail.com", // list of receivers
    subject: `${req.body.name} quiere contactarse`, // Subject line
    text: text, // plain text body
    html: text, // html body
  });

  // send mail with defined transport object
  let greet = transporter.sendMail({
    from: '"SID-newContact" <info@sidhn.com>', // sender address
    to: "marcelo.andres99.ma@gmail.com", // list of receivers
    subject: `Gracias por contactarse!`, // Subject line
    text: "Recibimos su contacto, nosotros nos contactaremos dentro de 24h", // plain text body
    html: "Recibimos su contacto, nosotros nos contactaremos dentro de 24h", // html body
  });
  res.json("success");
});

module.exports = router;
