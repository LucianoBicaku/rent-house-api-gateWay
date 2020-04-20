var express = require("express");
var app = express();
var router = require("./routers/router");
var bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(router);

console.log("Simple API Gateway run on localhost:5500");

app.listen(5500);
