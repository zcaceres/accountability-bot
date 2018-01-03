/* Necessary to run on Glitch */
/* global require */

const timer = require('./src')
const express = require('express');
const app = express();

app.get("/", function (request, response) {
  response.sendStatus(200)
});

const listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

const TIME_TO_CHECK = 86400000
timer(TIME_TO_CHECK)
