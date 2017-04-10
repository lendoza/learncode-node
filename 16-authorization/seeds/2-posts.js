
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  
      return Promise.all([
        // Inserts seed entries
        knex('posts').insert({id: 1, text: 'Post $ 1 $', user_id: 1}),
        knex('posts').insert({id: 2, text: 'Post $ 2 $', user_id: 1}),
        knex('posts').insert({id: 3, text: 'Post $ 3 $', user_id: 2})
      ]);
};
