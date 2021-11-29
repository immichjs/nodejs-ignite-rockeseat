"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = require("./routes");
var app = (0, express_1.default)();
var PORT = process.env.PORT || 3333;
app.get('/', routes_1.createCourse);
app.listen(PORT, function () { return console.log("Server started on port: " + PORT); });
