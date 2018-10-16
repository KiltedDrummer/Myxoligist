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
  client.query(`UPDATE users SET ingredients = ingredients || (SELECT id FROM ingredients WHERE LOWER(name) = LOWER('${name}')) WHERE id = ${user_id}`, (err, res) => {
    if (err) {
      console.error(err);
    } else {
      client.query(`SELECT id, ingredients, recipes FROM users WHERE id = ${user_id}`, (err, res) => {
        if (err) {
          console.error(err);
        } else {
          console.log(res.rows);
          callback(res.rows);
        }
      });
    }
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

const getRecipes = (user_id, callback) => {
  client.query(`SELECT recipes.id, recipes.name, recipes.instructions, recipes.tags, recipes.ingredients_measured AS ingredients FROM recipes WHERE ARRAY[recipes.id] <@ (SELECT recipes FROM users WHERE id = ${user_id})`, (err, res) => {
    if (err) {
      console.error(err.stack);
    }
    callback(res.rows);
  })
}

const findRecipes = (user_id, callback) => {
  console.log('FIND');
  client.query(`SELECT recipes.id, recipes.name, recipes.instructions, recipes.tags, recipes.ingredients_measured AS ingredients FROM recipes WHERE recipes.ingredients_raw <@ (SELECT key_words FROM users WHERE id = ${user_id})`, (err, res) => {
    if (err) {
      console.error(err.stack);
    }
    callback(res.rows);
    // const recipeIds = [];
    // res.rows.forEach(recipe => {
    //   recipeIds.push(recipe.id);
    // });

    // client.query(`UPDATE users SET recipes = ${recipeIds} WHERE id = ${user_id}`, (err, res) => {
    //   if (err) {
    //     console.error(err);
    //   }
    //   console.log('UPDATED user recipes', res);
    // });

  })
}

const updateKeywords = (user_id, key_words, callback) => {
  client.query(`UPDATE users SET key_words = '{${key_words}}' WHERE id = ${user_id}`, (err, res) => {
    if (err) {
      console.error(err);
    }
    callback(res);
  })
}

const removeItem = (user_id, ingredient_id, callback) => {
  // console.log('DATABASE', ingredients.join());
  client.query(`UPDATE users SET ingredients = array_remove(ingredients, ${Number(ingredient_id)}) WHERE id = ${user_id}`, (err, res) => {
    if (err) {
      console.error(err);
    }
    // console.log('UPDATED user ingredients');
    callback(res);
  });
}


module.exports.connection = client;
module.exports.addItem = addItem;
module.exports.getIngredients = getIngredients;
module.exports.getRecipes = getRecipes;
module.exports.findRecipes = findRecipes;
module.exports.removeItem = removeItem;
module.exports.updateKeywords = updateKeywords;
