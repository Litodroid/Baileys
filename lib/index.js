"use strict";

const chalk = require("chalk");

// Animación loading
const frames = [
  "▁", "▃", "▄", "▅", "▆", "▇", "█",
  "▇", "▆", "▅", "▄", "▃"
];

let i = 0;

const loading = setInterval(() => {
  process.stdout.write(
    `\r${chalk.magentaBright("Iniciando Mod Lito: ")}${chalk.cyan(frames[i])}`
  );
  i = (i + 1) % frames.length;
}, 90);

// Mensaje final después de la animación
setTimeout(() => {
  clearInterval(loading);
  process.stdout.write("\r"); 

  console.log(
    chalk.magentaBright.bold("\n📲 MOD LITO 📲\n📲 IG : Litodroid\n")
  );
}, 2000);

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.proto = exports.makeWASocket = void 0;
const WAProto_1 = require("../WAProto");
Object.defineProperty(exports, "proto", { enumerable: true, get: function () { return WAProto_1.proto; } });
const Socket_1 = __importDefault(require("./Socket"));
exports.makeWASocket = Socket_1.default;
__exportStar(require("../WAProto"), exports);
__exportStar(require("./Utils"), exports);
__exportStar(require("./Types"), exports);
__exportStar(require("./Store"), exports);
__exportStar(require("./Defaults"), exports);
__exportStar(require("./WABinary"), exports);
__exportStar(require("./WAM"), exports);
__exportStar(require("./WAUSync"), exports);
exports.default = Socket_1.default;
