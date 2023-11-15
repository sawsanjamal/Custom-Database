const Table = require("../Table");
module.exports = class SelectCommand {
  constructor({ tableName, columns, allColumns }) {
    this.table = new Table(tableName);
    this.columns = columns;
    this.allColumns = allColumns;
  }
  async perform() {
    // return await this.table.selectCommand(this.columns);
  }
};
