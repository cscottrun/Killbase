let express = require('express');
let router = express.Router();
let knex = require('../db/knex');

//HOME PAGE
router.get('/' , (req,res) =>{
  res.render('index')
})

//////////////////
/****ASSASSINS*****/

//Show all assassins sorted by rating
router.get('/assassins', (req, res) => 
knex('assassins')
.orderBy('rating','desc')
.then((assassins) => {
  res.render('assassins', {assassins:assassins});
})
)

//Get Assassin profile
router.get('/assassins/:id' , (req,res) => {
  let id = (req.params.id)
  knex('jobs')
  .fullOuterJoin('assassins','assassins.assassin_id','jobs.assassin_id')
  .fullOuterJoin('contracts', 'jobs.contract_id' , 'contracts.contract_id')
  .where('assassins.assassin_id','=', id)
  .then((assassin) => {
    console.log(assassin[0].assassin_id,
      assassin.length)
      res.render('assassins-id',{assassin:assassin})
      //res.send(assassin)
    })
})

//Edit Assassin Form
router.get('/assassins/edit/:id' , (req,res) => {
  let id = (req.params.id)
  knex('assassins')
  .where('assassin_id', '=', id)
  .then ((assassin) => {
    res.render('assassins-edit',{assassin:assassin})
  })
})

//Patch form for Assassin edit
router.post('/assassins/edit/done', (req,res,next) => {
  let id = req.body.assassin_id;
  knex('assassins')
  .where ('assassin_id','=', id)
  .update({
    "name": req.body.name,
    "code_name": req.body.code_name,
    "weapon": req.body.weapon,
    "contact_info": req.body.contact_info,
    "age": req.body.age,
    "price": req.body.price,
    "rating": req.body.rating,
    "kills": req.body.kills,
    "assassin_photo": req.body.assassin_photo
  },'*')
  .then((assassins) => {
    //res.send(assassins)
    res.render('assassins-edit-done')
  })
})

//Post form submission for new Assain
router.post('/newassassin' , (req,res,next) => {
  knex('assassins')
  .insert({
    name: req.body.name,
    code_name: req.body.code_name,
    weapon: req.body.weapon,
    age: req.body.age,
    price: req.body.price,
    kills: 0,
    rating: 0,
    assassin_photo: req.body.assassin_photo
  },'*')
  .then((assassins) => {
    //res.send(assassins)
    res.render('newassassin');
  }) 
})


//////////////////
/****CONTRACTS*****/

//All Contractacts
router.get('/contracts' , (req,res) => {
knex('contracts')
.then((contracts) => {
  res.render('contracts',{contracts:contracts})
})
})

//Contract Profile
router.get('/contracts/:id' , (req,res) => {
  let id = (req.params.id)
  knex('jobs')
  .join('assassins','assassins.assassin_id','jobs.assassin_id')
  .join('contracts', 'jobs.contract_id' , 'contracts.contract_id')
  .where('jobs.contract_id','=', id)
  .then((contract) => {
    res.render('contracts-id',{contract:contract})
  })
})

//Form for new contract
router.get('/contracts/edit', (req,res) => {
  res.render('contracts-edit')
});

//Make post for new contract
router.post('/contracts/edit/done' , (req,res,next) => {
  knex('contracts')
  .insert({
    "target_name": req.body.target_name,
    "target_location": req.body.target_location,
    "target_photo": req.body.target_photo,
    "target_security": req.body.target_security,
    "client_name": req.body.client_name,
    "budget": req.body.budget
  },'*')
  .then((contract) => {
    res.render('contracts-edit-done');
  })
})

module.exports = router;