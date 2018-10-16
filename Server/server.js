const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database/index');

const app = express();

app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.static(path.join(__dirname, '../client/dist')));

//  REWORK to get all recipes based on a user's key_words
app.get('/recipes/:user_id/:ingredients', (req, res) => {
  const user_id = req.params.user_id;
  const ingredients = req.params.ingredients;
  console.log(ingredients);
  db.get
});

app.get('/user/:user_id/ingredients', (req, res) => {
  const user_id = req.params.user_id;
  db.getIngredients(user_id, (data) => {
    res.send(data)
  });
})

app.get('/user/:user_id/recipes', (req, res) => {
  const user_id = req.params.user_id;
  db.getRecipes(user_id, (data) => {
    res.send(data)
  })
});

app.get('/user/:user_id/addItem/:name', (req, res) => {
  const user_id = req.params.user_id;
  const name = req.params.name;
  db.addItem(name, user_id, (data) => {
    res.send(data);
  });
})

app.get('/user/:user_id/find', (req, res) => {
  const user_id = req.params.user_id;
  db.findRecipes(user_id, (data) => {
    console.log('SERVER 56', data);
    res.send(data);
  })
})

app.get('/user/:user_id/remove/:ingredient_id', (req, res) => {
  const user_id = req.params.user_id;
  const ingredient_id = req.params.ingredient_id;
  // console.log('REMOVE', ingredients);
  db.removeItem(user_id, ingredient_id, (data) => {
    console.log('POST SUCCESSFUL', data)
    db.getIngredients(user_id, (data) => {
      res.send(data);
    });
  });
})

app.post('/user/:user_id/ingredients', (req, res) => {
  const user_id = req.params.user_id;
  const ingredients = req.body.ingredients;
  ingredients.forEach((ele, index) => {
    ingredients[index] = Number(ele);
  });
  console.log('POST', ingredients);
  db.removeItem(user_id, ingredients, (data) => {
    console.log('POST SUCCESSFUL', data)
    res.send(data);
  })
})

app.post('/user/:user_id/keywords', (req, res) => {
  const user_id = req.params.user_id;
  const key_words = req.body.key_words;
  db.updateKeywords(user_id, key_words, (err, data) => {
    res.send(data);
  })

})


const port = 2999;

app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});