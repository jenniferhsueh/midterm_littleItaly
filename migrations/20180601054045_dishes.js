
exports.up = function(knex, Promise) {  
  return Promise.all([
    knex.schema.createTable('dishes', function(table){
      table.increments('id').primary();
      table.string('name');
      table.decimal('price');
    })
  ])
};

exports.down = function(knex, Promise) {  
  return Promise.all([
    knex.schema.dropTable('dishes')
  ])
};
