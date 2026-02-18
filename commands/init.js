const fs = require('fs');
const path = require('path');
const ask = require('../utils/ask')
const logger = require('../utils/logger')

/** 
* init command
* Adds preinstall hook to package.json
*/


async function init() {
    const confirmed = await ask("Do you want to add npm-secure preinstall hook to package.json?")
    process.stdout.write("\x1Bc");
    if (!confirmed) return console.log(logger.warn("Initialization canceled."))
    

    //find package.json
    const pkgPath = path.join(process.cwd(), 'package.json');
    if (!fs.existsSync(pkgPath)) return console.log(logger.error('package.json not found!'));

    let pkg;
    try {
        const pkgContent = fs.readFileSync(pkgPath, "utf-8");
        pkg = JSON.parse(pkgContent);
    } catch (error) {
        return console.log(logger.error(`Failed to read package.json: ${error.message}`));
    }

    if (pkg.scripts && pkg.scripts.preinstall === 'npmsecure check') {
        const removeConfirmed = await ask("npm-secure is already initialized. Do you want to remove it?");
        if (removeConfirmed) {
            delete pkg.scripts.preinstall;
            try {
                fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');
                console.log(logger.success('npm-secure preinstall hook removed successfully.'));
            } catch (error) {
                return console.log(logger.error(`Failed to update package.json: ${error.message}`));
            }
        } else {
            console.log(logger.warn("Initialization canceled."));
        }
        return;
    }

    if (!pkg.scripts) {
        pkg.scripts = {};
    }

    pkg.scripts.preinstall = 'npmsecure check';

    try {
        fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');
    } catch (error) {
        return console.log(logger.error(`Failed to write package.json: ${error.message}`));
    }

    console.log(logger.success('npm-secure successfully initialized!'));
    console.log(logger.feature('Every npm install will be checked automatically'));

}

module.exports = init