const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");

const register = require("./routes/api/register");

dotenv.config();
const app = express();

//body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//db config
mongoose
  .connect(process.env.MONGODB_URI || process.env.DB)
  .then(() => console.log("Connected to db"))
  .catch((err) => console.log(err));

//passport middleware
app.use(passport.initialize());

//use routes
app.use("/api/register", register);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("./website/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "website", "build", "index.html")); //relative file
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on ${port}`));
