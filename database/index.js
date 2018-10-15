const pg = require('pg');

const { Client } = pg;

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  port: '5432',
});

client.connect();

const addItem = (name, user_id, callback) => {
  // find id for ingredient in DB
  // append user ingredients with id 
  // if user.types doesn't contain new item type, append to array.
  client.query(`SELECT id FROM ingredients WHERE LOWER(name) = LOWER(${name})`, (err, res) => {
        if (err) {
          console.error(err);
        }
        client.query(`UPDATE users SET ingredients = ingredients || ${res.id} WHERE id = ${user_id}`, (err, res) => {
          if (err) {
            console.error(err);
          } else {
            console.log(res);
            callback(res);
          }
        });
      });
}

const getIngredients = (user_id, callback) => {
  client.query(`SELECT ingredients.* FROM ingredients WHERE ARRAY[ingredients.id] <@ (SELECT ingredients FROM users WHERE id = ${user_id})`, (err, res) => {
    if (err) {
      console.error(err);
    }
    callback(res.rows)
  });
}


module.exports.connection = client;
module.exports.addItem = addItem;
module.exports.getIngredients = getIngredients;
