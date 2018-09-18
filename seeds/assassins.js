
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('assassins').del()
    .then(function () {
      // Inserts seed entries
      return knex('assassins').insert([
        {
          "name": "Alexander Duggan",
          "code_name": "The Jackal",
          "weapon": "Sniper rifle",
          "age": 31,
          "price": 45,
          "rating": 7.5,
          "kills": 28
        },
        {
          "name": "Anton Chigurh",
          "code_name": "Old Man",
          "weapon": "Pneumatic bolt gun",
          "age": 52,
          "price": 40,
          "rating": 9,
          "kills": 72
        },
        {
          "name": "",
          "code_name": "Ghost Dog",
          "weapon": "Pistol",
          "age": 28,
          "price": 20,
          "rating": 6.5,
          "kills": 35
        },
        {
          "name": "Jason Bourne",
          "code_name": "",
          "weapon": "Parkour",
          "age": 27,
          "price": 25,
          "rating": 7,
          "kills": 48
        },
        {
          "name": "John Wick",
          "code_name": "Baba Yaga",
          "weapon": "Lots of guns",
          "age": 35,
          "price": 50,
          "rating": 9.5,
          "kills": 433
        },
        {
          "name": "Jules Winnfield",
          "code_name": "",
          "weapon": "Pistol",
          "age": 26,
          "price": 15,
          "rating": 6.5,
          "kills": 13
        },
        {
          "name": "Leon",
          "code_name": "The Professional",
          "weapon": "Everything",
          "age": 41,
          "price": 30,
          "rating": 8.5,
          "kills": 87
        },
        {
          "name": "Nikita Mears",
          "code_name": "Nikita, La Femme Nikita",
          "weapon": "Silenced pistols",
          "age": 28,
          "price": 30,
          "rating": 7,
          "kills": 32
        },
        {
          "name": "Pickle Rick",
          "code_name": "Solenya",
          "weapon": "Lasers and office supplies",
          "age": 60,
          "price": 0,
          "rating": 8,
          "kills": 24
        }
      ]);
    });
};
