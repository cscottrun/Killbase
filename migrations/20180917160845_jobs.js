exports.up = function(knex, Promise) {
  return knex.schema.createTable('jobs', function(table){
    table.integer('assassin_id');
    table.integer('contract_id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('jobs');
};