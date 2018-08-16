exports.up = async db => {
    await db.schema.createTable('countries', t => {
        t.increments('id').unsigned().primary();
        t.string('name').notNull();
        t.string('isoCode').notNull();
        t.string('callingCode').notNull();
        t.string('timeZone').notNull();
        t.string('currency').notNull();
        t.boolean('isActive').defaultTo(false);
    })
};

exports.down = async db => {
    await db.schema.dropTableIfExists('countries');
};