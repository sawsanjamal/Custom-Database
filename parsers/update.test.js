const { update } = require("lodash");
const parseUpdateCommand = require("./update");

describe("With valid command", () => {
  const command = 'UPDATE { "a" : 1, "b" : 2} IN table';

  test("It returns the correct UpdateCommand", () => {
    const updateCommand = parseUpdateCommand(command);
    expect(updateCommand.properties).toEqual({ a: 1, b: 2 });
    expect(updateCommand.table.tableName).toBe("table");
  });
});

describe("With invalid command", () => {
  const command = "UPDATE { iuhkjnk } IN table";

  test("It returns the correct UpdateCommand", () => {
    expect(parseUpdateCommand(command)).toBeUndefined();
  });
});

describe("With no table name", () => {
  const command = 'UPDATE { "a" : 1, "b" : 2} IN';

  test("It returns the correct UpdateCommand", () => {
    expect(parseUpdateCommand(command)).toBeUndefined();
  });
});

describe("With no update clause", () => {
  const command = ' { "a" : 1, "b" : 2} IN table';

  test("It returns the correct UpdateCommand", () => {
    expect(parseUpdateCommand(command)).toBeUndefined();
  });
});

describe("With no in clause", () => {
  const command = 'UPDATE { "a" : 1, "b" : 2}  table';

  test("It returns the correct UpdateCommand", () => {
    expect(parseUpdateCommand(command)).toBeUndefined();
  });
});

describe("With no properties", () => {
  const command = "UPDATE IN  table";

  test("It returns the correct UpdateCommand", () => {
    expect(parseUpdateCommand(command)).toBeUndefined();
  });
});
