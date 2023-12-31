/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('users', function (table) {
        table.increments('id');
        table.string('first_name', 255).notNullable();
        table.string('email', 255).notNullable();
        table.timestamp("created_at").defaultTo(knex.fn.now())
    })
};


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};


exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
  };