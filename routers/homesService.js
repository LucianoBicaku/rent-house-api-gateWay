var express = require("express");
var router = express.Router();
const apiAdapter = require("./apiAdapter");

const BASE_URL = "http://localhost:5000";
const api = apiAdapter(BASE_URL);

router.get("/homes", (req, res) => {
  api.get(req.path).then((resp) => {
    res.send(resp.data);
  });
});

router.get("/homes/:id", (req, res) => {
  api.get(req.path).then((resp) => {
    res.send(resp.data);
  });
});

router.get("/premiumHomes", (req, res) => {
  api.get(req.path).then((resp) => {
    res.send(resp.data);
  });
});

router.get("/normalHomes", (req, res) => {
  api.get(req.path).then((resp) => {
    res.send(resp.data);
  });
});

module.exports = router;
