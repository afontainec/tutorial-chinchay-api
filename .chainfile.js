const path = require('path');

module.exports = {
  models: {
    directory: path.join(__dirname, 'models'),
  },
  controllers: {
    directory: path.join(__dirname, 'controllers')
  },
  views: {
    directory: path.join(__dirname, 'views')
  },
  routes: {
    directory: path.join(__dirname, 'routes')
  },
  knex:  path.join(__dirname, 'knex.js'),
  access: path.join(__dirname, 'access.js'),
  thewall: path.join(__dirname, 'thewall.js')
};