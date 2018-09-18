exports.up = function(knex, Promise) {
  return knex.schema.createTable('contracts', function(table){
    table.increments('contract_id');
    table.string('target_name');
    table.string('target_location');
    table.string('target_photo');
    table.integer('target_security');
    table.string('client_name');
    table.integer('budget');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('contracts');
};