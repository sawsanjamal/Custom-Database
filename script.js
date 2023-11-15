//Get user input
// Choose our parser
// Parse input
// Execute input
//Return data
// Repeat
const parseCommand = require("./parseCommand");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
async function start() {
  while (true) {
    try {
      const commandString = await waitForCommand();
      console.log(commandString);
      printFormattedJSON(await parseCommand(commandString));
    } catch (e) {
      console.log(`${e.name}: ${e.message}`);
    }
  }
}
start();

function waitForCommand() {
  return new Promise((resolve) => {
    rl.question("> ", resolve);
  });
}
function printFormattedJSON(string) {
  console.log(JSON.stringify(string, null, 2));
}
