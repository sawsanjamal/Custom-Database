const Table = require("./Table");
const mock = require("mock-fs");
const TableDoesNotExistError = require("./errors/TableDoesNotExistError");

describe("#readData", () => {
  describe("with nonexisting table name", () => {
    beforeEach(() => mock({ data: {} }));
    afterEach(mock.restore);
    test("It throws TableDoesNotExistError", async () => {
      const table = new Table("table");
      await expect(table.readData()).rejects.toThrow(TableDoesNotExistError);
    });
  });

  describe("With an existing table name", () => {
    const data = [
      { a: 1, b: 2 },
      { a: 3, b: 4 },
    ];
    beforeEach(() => mock({ data: { "table.json": JSON.stringify(data) } }));
    afterEach(mock.restore);

    test("It gets all the data in the table", async () => {
      const table = new Table("table");
      expect(await table.readData()).toEqual(data);
    });
  });
});
