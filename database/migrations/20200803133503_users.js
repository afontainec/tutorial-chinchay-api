exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    // Incremental id
    table.increments();
    table.string('username').notNullable();
    table.text('password');
    // created_at and updated_at
    table.timestamps();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
