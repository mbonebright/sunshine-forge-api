exports.up = function (knex, Promise) {
    return knex.schema.createTable('apps', (table) => {
        table.increments() // set up Primary Key ID field
        table.string('name')
        table.integer('memory_allocationmb')
        table.integer('disk_allocationmb')
        table.integer('space_id')
            .unsigned()
            .references('id')
            .inTable('spaces')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('apps')
};
