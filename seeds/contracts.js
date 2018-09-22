
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contracts').del()
    .then(function () {
      // Inserts seed entries
      return knex('contracts').insert([
        {
          "target_name": "Butch Coolidge",
          "target_location": "Los Angeles",
          "target_photo": "https://goo.gl/LCquZj",
          "target_security": 3,
          "client_name": "Marcellus Wallace",
          "budget": 40,
          "contract_status": "active"
        },
        {
          "target_name": "The Jaguar",
          "target_location": "Russian Embassy",
          "target_photo": "https://goo.gl/6JWsiv",
          "target_security": 9,
          "client_name": "Concerto",
          "budget": 70,
          "contract_status": "active"
        },
        {
          "target_name": "Norman Stansfield",
          "target_location": "Manhattan",
          "target_photo": "https://i.imgur.com/mdIk33E.jpg",
          "target_security": 7,
          "client_name": "Mathilda",
          "budget": 35,
          "contract_status": "complete"
        },
        {
          "target_name": "Santino D'Antonio",
          "target_location": "Continental Hotel",
          "target_photo": "https://goo.gl/fUPkYy",
          "target_security": 10,
          "client_name": "Winston",
          "budget": 25,
          "contract_status": "active"
        },
        {
          "target_name": "Sonny Valerio",
          "target_location": "Queens",
          "target_photo": "https://goo.gl/8DHYUS",
          "target_security": 4,
          "client_name": "Ray Vargo",
          "budget": 10,
          "contract_status": "active"
        },
        {
          "target_name": "Mosquito",
          "target_location": "Austin Texas",
          "target_photo": "https://previews.123rf.com/images/kosmopolitka/kosmopolitka1712/kosmopolitka171200003/91937640-cute-mosquito-icon.jpg",
          "target_security": 7,
          "client_name": "James",
          "budget": 50,
          "contract_status": "active"
        },
        {
          "target_name": "Bad Babe",
          "target_location": "Austin Texas",
          "target_photo": "https://static1.squarespace.com/static/5596c92be4b069786e8ac50e/55cca8c3e4b0fc9c2b635aad/55ccbbdae4b0cb73558d6d24/1439480868444/?format=1000w",
          "target_security": 9,
          "client_name": "Babeo",
          "budget": 34,
          "contract_status": "active"
        }
      ]);
    });
};
