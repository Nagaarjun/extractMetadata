"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("./index"));
var express_1 = __importDefault(require("express"));
var PORT = 3000;
var server = express_1.default();
server.use("/", index_1.default);
server.listen(PORT);
console.log("Listening on port " + PORT + "...");
