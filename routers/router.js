var express = require("express");
var router = express.Router();
var homesService = require("./homesService");

router.use((req, res, next) => {
  console.log("Called: ", req.path);
  console.log(req.headers);
  next();
});

router.use(homesService);

module.exports = router;
