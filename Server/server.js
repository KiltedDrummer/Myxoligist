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

app.get('/recipes/:user_id/:ingredients', (req, res) => {
  const user_id = req.params.user_id;
  const ingredients = req.params.ingredients;
  console.log(ingredients);
});

app.get('/user/:user_id/ingredients', (req, res) => {
  const user_id = req.params.user_id;
  db.getIngredients(user_id, (data) => {
    res.send(data)
  });
})


const port = 2999;

app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});