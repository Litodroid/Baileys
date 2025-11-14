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

// FIX IMPORTACIÓN DE WAProto (CommonJS)
const WAProtoPkg = require("../WAProto");
const proto = WAProtoPkg.proto || WAProtoPkg.default?.proto;

// IMPORTACIÓN DE SOCKET
const SocketPkg = require("./Socket");
const makeWASocket = SocketPkg.default || SocketPkg;

// EXPORTACIONES
exports.makeWASocket = makeWASocket;
exports.proto = proto;

// EXPORTACIONES DE MÓDULOS
Object.assign(
  exports,
  WAProtoPkg,
  require("./Utils"),
  require("./Types"),
  require("./Store"),
  require("./Defaults"),
  require("./WABinary"),
  require("./WAM"),
  require("./WAUSync")
);

// EXPORTACIÓN POR DEFECTO
exports.default = makeWASocket;
