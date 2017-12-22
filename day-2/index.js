const chalk = require('chalk');
const log = console.log;

const dayTwoSolution = require('./day2');
const dayTwoInput = require('./day2.input');

log(chalk.bold.yellow('****** Day 2 ******'));
log(chalk`{bold Part 1:} ${dayTwoSolution.partOne(dayTwoInput)}`);
log(chalk`{bold Part 2:} ${dayTwoSolution.partTwo(dayTwoInput)}`);
