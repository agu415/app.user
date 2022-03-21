const express = require("express");

//routes
const User = require ('./user');

const router = express.Router();

User(router);

module.exports = router;
