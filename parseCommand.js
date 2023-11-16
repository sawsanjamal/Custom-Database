const parseInsertCommand = require("./parsers/insert");
const InvalidCommandError = require("./errors/InvalidCommandError");
const parseSelectCommand = require("./parsers/select");
const parseWhereCommand = require("./parsers/where");
const parseUpdateCommand = require("./parsers/update");
const parseDeleteCommand = require("./parsers/delete");

const parsers = [
  parseInsertCommand,
  parseSelectCommand,
  parseUpdateCommand,
  parseDeleteCommand,
];

module.exports = async function parseCommand(commandString) {
  const command = parsers
    .map((parser) => parser(commandString))
    .find((command) => command != null);

  if (command == null) throw new InvalidCommandError(commandString);

  const whereCommand = parseWhereCommand(commandString);

  return await command.perform(whereCommand);
};
