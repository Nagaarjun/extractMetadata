import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import * as data from "./routes/metaDataController";
const app = express();
const fs = require("fs");
const path = require("path");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//For now i have put it in App level... but can be changed to mini Routers
// app.use("/login", users.authcall);
// app.use("/users", users.getUsers);
// app.use("/register", users.registerUsers);
// app.use("/giveKudos", kudos.giveKudos);

app.use("/getMetaData", data.getMetaData);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
