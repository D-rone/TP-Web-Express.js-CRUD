var express = require("express");
var app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

var router = require("./router2.js");

app.use("/users", router);

const _Port = 5000;
app.listen(_Port);
console.log("Server started in port : " + _Port);

// var router = require("./router");

// var path = require("path");

// app.use(express.static(path.join(__dirname, "public")));

// app.use("/etudiant", router);
