"use strict";
var awsServerlessExpress = require('aws-serverless-express');
var app = require('./src/server');
var server = awsServerlessExpress.createServer(app);
module.exports.universal = function (event, context) { return awsServerlessExpress.proxy(server, event, context); };
