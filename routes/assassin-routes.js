let express = require('express');
let router = express.Router();
let knex = require('../db/knex');

//home page
router.get('/' , (req,res) =>{
  res.render('index')
})

//Show assassins page with search options
router.get('/assassins', (req, res) => 
  knex('assassins')
    .orderBy('kills','desc')
    .then((assassins) => {
      res.render('assassins', {assassins:assassins});
  })
)

//////////////////
/****FORMS*****/

//Edit Assassin Form
router.get('/editassassin/:id' , (req,res) => {
  let id = (req.params.id)
  knex('assassins')
  .where('assassin_id', '=', id)
  .then ((assassin) => {
    res.render('editassassin',{assassin:assassin})
  })
})

//Patch form for Assassin edit
router.post('/edit', (req,res,next) => {
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
    "rating": req.body.price,
    "kills": req.body.price,
    "assassin_photo": req.body.assassin_photo
  },'*')
  .then((assassins) => {
    //res.send(assassins)
    res.render('edit')
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

              // //Get chosen profile
              // router.get('/profile/:id' , (req,res) => {
              //   let id = (req.params.id)
              //   knex('jobs')
              //   .join('assassins','assassins.assassin_id','jobs.assassin_id')
              //   .join('contracts', 'jobs.contract_id' , 'contracts.contract_id')
              //   .where('jobs.assassin_id','=', id)
              //   .then((assassin) => {
              //     res.render('profile',{assassin:assassin})
              //   })
              // })




//Form for new contract
router.get('/newcontract', (req,res) => {
  res.render('newcontract')
});

//Make post for new contract
router.post('/newcontractdone' , (req,res,next) => {
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
    res.render('newcontractdone');
  })
})

//////////////////
/****ASSASSINS*****/

//Get all assassins sorted by number of kills
router.get('/mostkills', (req, res) => 
  knex('assassins')
    .orderBy('kills','desc')
    .then((assassins) => {
      res.render('mostkills', {assassins:assassins});
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
  })
)

//Number of assassins that are capable of taking out Norman Stansfield.(price <= $35)
router.get('/norman', (req,res) =>
knex('assassins')
.count('assassin_id')
.where('price','<',35)
.then((assassin) => {
  res.render('norman', {assassin:assassin});
  })
)

//Total amount it would require to hire every available assassin.
router.get('/total', (req,res) => 
  knex('assassins')
  .sum('price')
  .then((sum) => {
    res.render('total',{sum:sum})
  })
)

//Number of currently contracted assassins
router.get('/staff', (req,res) => {
  knex('assassins')
  .count('assassin_id')
  .then((assassins) => {
    res.render('staff', {assassins:assassins})
  })
})

//////////////////
/****CONTRACTS*****/

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

//Current Contracts
router.get('/contracts' , (req,res) => {
  knex('contracts')
  .then((contracts) => {
    res.render('contracts',{contracts:contracts})
  })
})

//////////////////
/****PROFILE*****/

//Get chosen profile
router.get('/profile/:id' , (req,res) => {
  let id = (req.params.id)
  knex('jobs')
  .join('assassins','assassins.assassin_id','jobs.assassin_id')
  .join('contracts', 'jobs.contract_id' , 'contracts.contract_id')
  .where('jobs.assassin_id','=', id)
  .then((assassin) => {
    res.render('profile',{assassin:assassin})
  })
})

// //test
// router.get('/test', (req,res) => 
//   knex('jobs')
//   .join('assassins','assassins.assassin_id','jobs.assassin_id')
//   .join('contracts', 'jobs.contract_id' , 'contracts.contract_id')
//   .then((assassins) => {
//     res.send(assassins)
//   })
// )


module.exports = router;



