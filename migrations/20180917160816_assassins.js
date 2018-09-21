exports.up = function(knex, Promise) {
  return knex.schema.createTable('assassins', function(table){
    table.increments('assassin_id');
    table.string('name');
    table.string('code_name');
    table.string('weapon');
    table.string('contact_info');
    table.integer('age');
    table.integer('price');
    table.decimal('rating');
    table.integer('kills');
    table.string('assassin_photo');
    table.string('status');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('assassins');
};