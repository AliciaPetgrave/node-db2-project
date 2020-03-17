//describe the changes
exports.up = function(knex) {
  return knex.schema.createTable('cars', tlb => {
    tlb.increments()

    tlb.string('VIN').notNullable().index()
    tlb.string('make').notNullable().index()
    tlb.string('model').notNullable().index()
    tlb.integer('mileage').notNullable()
    tlb.string('transmission')
    tlb.string('title')
  })
};

//how to undo changes
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};
