#!/usr/bin/env node

const help = require("../commands/help");
const init = require("../commands/init");
const version = require("../commands/version")
const pkg = require("../package.json");


/**
 * npmsecure CLI (brain file)
 * npmsecure beyin dosyası. (for tr)
 * Entry point for all commands
 */



// aliases
const helpAliases = new Set([
    "--h",
    "--help",
    "-h",
    "-help",
    "-?",
    // continue if needed
])

const versionAliases = new Set([
  "--v",
  "--version",
  "-v",
  "version",
]);

const initAliases = new Set([
  "--init",
  "--i",
  "-i",
  "-init",
  "init",
  "i"
]);



const command = process.argv[2];
const args = process.argv.slice(3);

if (!command || helpAliases.has(command)) return help();

switch (true) {
    case versionAliases.has(command):
        version();
        break;
    case initAliases.has(command):
        init();
        break;
    default:
        break;
}
