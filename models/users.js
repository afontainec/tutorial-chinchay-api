const { Table, ChinchayError } = require('chinchay');
const bcrypt = require('bcrypt-nodejs');


class Users extends Table {
  constructor() {
    const tableName = 'users';
    super(tableName);
  }

  save(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(8), null); // encrypt password
    return super.save(user);
  }

  checkCredentials(user, password) {
    if (!user) return false;
    return bcrypt.compareSync(password, user.password);
  }

  async getUserByCredentials(username, password) {
    const result = await this.find({ username });
    const user = result[0];
    if (!this.checkCredentials(user, password)) throw new ChinchayError('username password do not match', 'wrong_credentials');
    return user;
  }
}


const instance = new Users();

module.exports = instance;
