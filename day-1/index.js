const chalk = require('chalk');
const log = console.log;

const dayOneSolution = require('./day1');
const dayOneInput = require('./day1.input');

log(chalk.bold.yellow('****** Day 1 ******'));
log(chalk`{bold Part 1:} ${dayOneSolution.partOne(dayOneInput)}`);
log(chalk`{bold Part 2:} ${dayOneSolution.partTwo(dayOneInput)}`);