"use strict";

console.log("\n📲 Mod Lito 📲\n");

// FIX — Cargar WAProto aunque sea CommonJS
const WAProtoPkg = require("../WAProto");
const proto = WAProtoPkg.proto || WAProtoPkg.default?.proto;

// FIX — Cargar makeWASocket
const SocketPkg = require("./Socket");
const makeWASocket = SocketPkg.default || SocketPkg;

// EXPORTAR PRINCIPALES
exports.proto = proto;
exports.makeWASocket = makeWASocket;

// AÑADIR TODOS LOS MÓDULOS (RUTAS CORRECTAS)
Object.assign(
  exports,
  WAProtoPkg,
  require("./Utils/index.js"),
  require("./Types/index.js"),
  require("./Store/index.js"),
  require("./Defaults/index.js"),
  require("./WABinary/index.js"),
  require("./WAM/index.js"),
  require("./WAUSync/index.js")
);

// EXPORT DEFAULT
exports.default = makeWASocket;
