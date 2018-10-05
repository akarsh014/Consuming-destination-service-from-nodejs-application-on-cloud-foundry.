'use strict';
const oData = require("../odata/odata");
var express = require('express');
var router = express.Router();
var urlBase = '/readOrderDetails';

router.get('/', function(req, res, next) {
  req.url = urlBase; //We forward the default request to the /products endpoint request
  router.handle(req, res);
});

router.get(urlBase, function(req, res) {
  var data = undefined;
      oData.readOrderDetails()
          .then(function (body) {
              const data = body.d.results;
              console.log(`RESULTS: ${JSON.stringify(data)}`);
          })
          .catch(function(error) {
              console.error(`Error uploadInitialData ${error.toString()}`);
              data = error;
          });
          res.send(data);
});


module.exports = router;
