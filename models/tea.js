const { Table } = require('chinchay');


class Tea extends Table {
  constructor() {
    const tableName = 'tea';
    super(tableName);
  }
}


const instance = new Tea();


module.exports = instance;
