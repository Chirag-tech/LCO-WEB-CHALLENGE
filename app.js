var express = require("express");
var app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
//routes
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/tournament", (req, res) => {
  res.render("tournament");
});
app.get("/teams", (req, res) => {
  res.render("team");
});
app.get("/faq", (req, res) => {
  res.render("faq");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});
//setting up server
var port = process.env.PORT || 8090;
app.listen(port, function() {
  console.log("Server started..");
});
