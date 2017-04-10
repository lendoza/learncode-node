
exports.up = function(knex, Promise) {
  return knex.raw(`
      CREATE TABLE posts (
      id int(20) unsigned NOT NULL AUTO_INCREMENT,
      text varchar(20) DEFAULT NULL,
      user_id int(20) DEFAULT NULL,
      PRIMARY KEY (id)
    ) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
  `)
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("posts");
};
