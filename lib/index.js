"use strict";

import chalk from "chalk";

const frames = [
  "▁", "▃", "▄", "▅", "▆", "▇", "█",
  "▇", "▆", "▅", "▄", "▃"
];

let i = 0;

const loading = setInterval(() => {
  process.stdout.write(
    `\r${chalk.magenta("Iniciando Mod Lito: ")}${chalk.cyan(frames[i])}`
  );
  i = (i + 1) % frames.length;
}, 90);
setTimeout(() => {
  clearInterval(loading);
  process.stdout.write("\r");

  console.log(
    chalk.magenta.bold("\n📲 MOD LITO 📲\n📲 IG : Litodroid\n")
  );
}, 2000);

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !mod.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function () { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.proto = exports.makeWASocket = void 0;

import pkg from "../WAProto/index.js";
const { proto: _proto } = pkg;

Object.defineProperty(exports, "proto", { enumerable: true, get: function () { return _proto; } });

import _Socket from "./Socket/index.js";
exports.makeWASocket = _Socket;

__exportStar(await import("../WAProto/index.js"), exports);
__exportStar(await import("./Utils/index.js"), exports);
__exportStar(await import("./Types/index.js"), exports);
__exportStar(await import("./Store/index.js"), exports);
__exportStar(await import("./Defaults/index.js"), exports);
__exportStar(await import("./WABinary/index.js"), exports);
__exportStar(await import("./WAM/index.js"), exports);
__exportStar(await import("./WAUSync/index.js"), exports);

export default _Socket;
