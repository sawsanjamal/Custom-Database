const parseWhereCommand = require("./where");
describe("With normal command", () => {
  const command = 'SELECT * FROM table WHERE { "a" : 1, "b" : 2}';
  test("It returns the correct WhereCommand", () => {
    expect(parseWhereCommand(command).conditions).toEqual({ a: 1, b: 2 });
  });
});

describe("With an invalid command", () => {
  const command = "SELECT * FROM table WHERE { vjhgjlik }";
  test("It returns undefined", () => {
    expect(parseWhereCommand(command)).toBeUndefined();
  });
});

describe("With no conditions", () => {
  const command = "SELECT * FROM table WHERE";
  test("It returns undefined", () => {
    expect(parseWhereCommand(command)).toBeUndefined();
  });
});

describe("With no where clause", () => {
  const command = "SELECT * FROM table";
  test("It returns undefined", () => {
    expect(parseWhereCommand(command)).toBeUndefined();
  });
});
