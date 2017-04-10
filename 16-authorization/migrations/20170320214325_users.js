// Define the structure of the database
// One for each table
// Run in order of creation

// Creates the database
// Can move from one structure to another (users => posts)
exports.up = function(knex, Promise) {
  return knex.raw(`
  CREATE TABLE users (
      id int(11) unsigned NOT NULL AUTO_INCREMENT,
      email varchar(255) DEFAULT '',
      password varchar(255) DEFAULT '',
      first_name varchar(255) DEFAULT NULL,
      last_name varchar(255) DEFAULT NULL,
      is_admin int(1) DEFAULT NULL,
      oauth_provider varchar(255) DEFAULT NULL,
      oauth_id varchar(255) DEFAULT NULL,
      PRIMARY KEY (id)
    ) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

   `)
};

// Uncreates the database
exports.down = function(knex, Promise) {
  return knex.schema.dropTable("users");
};
