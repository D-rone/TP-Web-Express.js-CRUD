var express = require("express");
var router = express.Router();

router.get("/index", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

router.get("/image", (req, res) => {
  res.send("<img src='/assets/img1.png' />");
});

router.get("/index/:nom", (req, res) => {
  res.render("p.ejs", { pe: req.params.nom });
});

module.exports = router;
