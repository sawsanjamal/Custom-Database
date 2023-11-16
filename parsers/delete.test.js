const { parse } = require("uuid");
const parseDeleteCommand = require("./delete");

describe("With a valid command", () => {
  const command = "DELETE FROM table";

  test("It returns the correct DeleteCommand", () => {
    const deleteCommand = parseDeleteCommand(command);
    expect(deleteCommand.table.tableName).toBe("table");
  });
});

describe("With no table name", () => {
  const command = "DELETE FROM ";

  test("It returns undefined", () => {
    expect(parseDeleteCommand(command)).toBeUndefined();
  });
});

describe("With no delete clause", () => {
  const command = " FROM table";

  test("It returns undefined", () => {
    expect(parseDeleteCommand(command)).toBeUndefined();
  });
});

describe("With no from clause", () => {
  const command = "DELETE  table";

  test("It returns undefined", () => {
    expect(parseDeleteCommand(command)).toBeUndefined();
  });
});
