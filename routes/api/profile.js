const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

//load models
const Client = require("../../models/clientModel");

// @route GET api/profile
// @desc Get current prof
// @access private

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};

    Client.findOne({ client: req.client.id })
      .then((client) => {
        if (!client) {
          errors.noUser = "No user found";
          return res.status(404).json({ errors });
        }
        res.json(client);
      })
      .catch((err) => res.status(404).json(err));
  }
);

module.exports = router;
