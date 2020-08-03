const { Table } = require('chinchay');


class Coffee extends Table {
  constructor() {
    const tableName = 'coffee';
    super(tableName);
  }
}


const instance = new Coffee();


module.exports = instance;
