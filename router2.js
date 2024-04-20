var express = require("express");
var router = express.Router();

let personnes = [
  { id: 0, name: "Mohamed", age: 22 },
  { id: 1, name: "Ilyes", age: 27 },
  { id: 2, name: "Nassim", age: 21 },
  { id: 3, name: "Amine", age: 20 },
  { id: 4, name: "Said", age: 25 },
];

router.get("/", (req, res) => {
  res.render("users.ejs", { personnes });
});

router.get("/addForm", (req, res) => {
  res.render("addForm.ejs");
});

router.post("/addUser", (req, res, next) => {
  let newId = personnes[personnes.length - 1]?.id + 1 || 0;
  let body = { id: newId, ...req.body };
  if (body.name && body.age) personnes.push(body);
  res.redirect("/users");
  next();
});

router.get("/updateForm", (req, res) => {
  let id = req.query.id;
  let user = personnes.filter((u) => u.id == id);
  if (user[0]) res.render("updateForm.ejs", { user: user[0] });
});

router.post("/updateUser", (req, res, next) => {
  let body = req.body;
  if (body.name && body.age) {
    let index = personnes.indexOf(personnes.filter((u) => u.id == body.id)[0]);
    personnes[index].name = body.name;
    personnes[index].age = body.age;
  }
  res.redirect("/users");
  next();
});

router.get("/deleteUser", (req, res, next) => {
  let id = req.query.id;
  personnes = personnes.filter((p) => p.id != id);
  res.redirect("/users");
  next();
});

module.exports = router;
