import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import * as data from "./routes/metaDataController";
const sls = require('serverless-http');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/getMetaData", data.getMetaData);
module.exports.handler = sls(app);