const express = require("express");
const serverless = require("serverless-http");
const app = express();
const router = express.Router();
router.get("/", (req, res) => {
  res.json({
    path: "Home",
    firstname: "pouya",
    lastname: "dehghani",
  });
});
router.get("/json", (req, res) => {
  res.json({
    path: "json",
    author: "bibek saha",
  });
});

app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);
