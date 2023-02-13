// startup/routes.js
const express = require('express');
const users = require('../routes/users');
const friends = require('../routes/friends');
//const error = require('../middleware/error');

module.exports = function(app) {
  app.use(express.json());
  app.use(users);
  app.use(friends);
};