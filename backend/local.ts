import app from "./src/index";
import express from "express";

const PORT = 3000;

const server = express();
server.use("/", app);
server.listen(PORT);
console.log(`Listening on port ${PORT}...`);
