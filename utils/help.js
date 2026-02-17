const chalk = require("chalk");

function help() {
  process.stdout.write("\x1Bc");

  console.log(
    chalk.bold.cyan("npmguard") +
    chalk.gray(" - License & security guard for npm install")
  );
  console.log("");

  console.log(chalk.bold("Usage:"));
  console.log("  npmguard <command> [options]");
  console.log("");

  console.log(chalk.bold("Commands:"));
  console.log("  help        Show this help");
}

module.exports = help;
