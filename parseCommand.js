const parseInsertCommand = require("./parsers/insert");
const InvalidCommandError = require("./errors/InvalidCommandError");
const parseSelectCommand = require("./parsers/select");
const parseWhereCommand = require("./parsers/where");

const parsers = [parseInsertCommand, parseSelectCommand];

module.exports = async function parseCommand(commandString) {
  const command = parsers
    .map((parser) => parser(commandString))
    .find((command) => command != null);

  if (command == null) throw new InvalidCommandError(commandString);

  const whereCommand = parseWhereCommand(commandString);

  return await command.perform();
};
