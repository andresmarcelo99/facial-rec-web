const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const passport = require("passport");
const dotenv = require("dotenv");
dotenv.config();

const Client = require("../../models/clientModel");
const Downloads = require("../../models/downloadModel");

router.get(
  "/:_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Client.findOne({ _id: req.params._id })
      .then((client) => {
        Downloads.findOne({ _id: process.env.DOWNLOAD })
          .then((download_model) => {
            if (!client.haveDownloaded) {
              Client.update(
                { email: client.email, haveDownloaded: false },
                { email: client.email, haveDownloaded: true }
              );
              download_model.downloads.push({
                client: req.client.id,
                name: client.name,
                email: client.email,
              });
              download_model.qtyDownload++;
              download_model.save().then((downloads) => res.json(downloads));
            }
            res.json(download_model);
          })
          .catch((err) => res.json(err));
        // const downLoad = new Downloads({
        //   qtyDownload: 0,
        //   downloads: [],
        // });
        // downLoad.save().then((resp) => res.json(resp));
      })
      .catch((err) => res.json(err));
  }
);

module.exports = router;
