const chalk = require("chalk");

module.exports = {
  ask: (msg) => `${chalk.cyan("[CONFIRM]")} ${chalk.whiteBright(msg)} ${chalk.gray("(y/n): ")}`,
  success: (msg) => `${chalk.green("[SUCCESS]")} ${chalk.whiteBright(msg)}`,
  warn: (msg) => `${chalk.yellow("[WARN]")} ${chalk.whiteBright(msg)}`,
  error: (msg) => `${chalk.red("[ERROR]")} ${chalk.whiteBright(msg)}`,
  critical: (msg) => `${chalk.bgRed.white.bold("[CRITICAL]")} ${chalk.whiteBright(msg)}`,
  feature: (msg) => `${chalk.gray("[→]")} ${chalk.gray(msg)}`
};
