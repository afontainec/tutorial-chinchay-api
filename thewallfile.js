const path = require('path');

module.exports = {
  access: {
    admin: ['*'], // access everything
    coffeeAdmin: ['/api/coffee/*'], // access to all routes starting with /api/coffee/
    coffeeDrinker: [
      '/api/coffee/find', /* index with all the coffee it has access to */
      ['/api/coffee/:id', 'id', 'get'], /* view the coffee with id=:id, only if it has the role coffeeDrinker to that :id. */
    ],
    teaAdmin: ['/api/tea/*'], /* access to all routes starting with /api/tea/ */
    teaDrinker: [
      '/api/tea/find', /* index with all the tea it has access to */
      ['/api/tea/:id', 'id', 'get'], /* view the tea with id=:id, only if it has the role teaDrinker to that :id. */
    ],
  },
  knex: path.join(__dirname, 'knex.js'),
};
