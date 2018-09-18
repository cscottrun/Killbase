let express = require('express');
let router = express.Router();
let knex = require('../db/knex');

//home page
router.get('/' , (req,res) =>{
  res.render('index')
})

//Show assassins page with search options
router.get('/assassins', (req,res) =>
  res.render('assassins')
)

//Show contracts page with search options
router.get('/contracts', (req,res) =>
  res.render('contracts')
)

//Edit/Add Assassin
router.get('/editassassin', (req,res) => 
  res.render('editassassin')
)

//Capture form submission for new Assain
router.post('/newassassin' , (req,res,next) => {
  knex('assassins')
    .insert({
      name: req.body.name,
      code_name: req.body.code_name,
      weapon: req.body.weapon,
      age: req.body.age,
      price: req.body.price
    },'*')
    .then((assassins) => {
      //res.send(assassins)
      res.render('newassassin');
    }) 
})

//Get all assassins sorted by number of kills
router.get('/mostkills', (req, res) => 
  knex('assassins')
    .orderBy('kills','desc')
    .then((assassins) => {
      res.render('mostkills', {assassins:assassins});
      knex.destroy();
  })
)

//Select all of the assassins older than 30 years old.
router.get('/old', (req,res) => 
  knex('assassins')
  .where('age', '>', 30)
  .orderBy('age')
  .then((assassins) => {
    //res.send(assassins)
    res.render('old', {assassins:assassins});
    knex.destroy();
  })
)

//Number of assassins that are capable of taking out Norman Stansfield.(price <= $35)
router.get('/norman', (req,res) =>
knex('assassins')
.count('assassin_id')
.where('price','<',35)
.then((assassin) => {
  //res.send(assassin)
  res.render('norman', {assassin:assassin});
  knex.destroy();
})
)

//Total amount it would require to hire every available assassin.
router.get('/total', (req,res) => 
  knex('assassins')
  .sum('price')
  .then((sum) => {
    res.render('total',{sum:sum})
    knex.destroy();
  })
)

//Contracts that can afford to pay Nikita Mears
router.get('/nikita', (req,res) => {
  knex('contracts')
  .select('target_name')
  .where('budget', '<', knex('assassins')
  .select('price')
  .where('name', 'Nikita Mears'))
  .then((contracts) => {
    res.render('nikita', {contracts:contracts})
  })
})

//Number of currently contracted assassins
router.get('/staff', (req,res) => {
  knex('assassins')
  .count('assassin_id')
  .then((assassins) => {
    res.render('staff', {assassins:assassins})
  })
})

module.exports = router;



