
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('assassins').del()
    .then(function () {
      // Inserts seed entries
      return knex('assassins').insert([
        {
          "code_name": "The Jackal",
          "weapon": "Sniper rifle",
          "contact_info": "jackal@gmail.com",
          "age": 31,
          "price": 45,
          "rating": 7.5,
          "kills": 28,
          "assassin_photo": "https://us.123rf.com/450wm/irisimchik/irisimchik1802/irisimchik180200021/95411532-vector-flat-style-illustration-of-desert-fennec-fox-icon-for-web-isolated-on-white-background-.jpg?ver=6"
        },
        {
          "code_name": "Old Man",
          "weapon": "Pneumatic bolt gun",
          "contact_info": "pneujackcity@gmail.com",
          "age": 52,
          "price": 40,
          "rating": 9,
          "kills": 72,
          "assassin_photo": "https://png.icons8.com/color/1600/old-man-skin-type-3"
        },
        {
          "code_name": "Ghost Dog",
          "weapon": "Pistol",
          "contact_info": "ghostdog@gmail.com",
          "age": 28,
          "price": 20,
          "rating": 6.5,
          "kills": 35,
          "assassin_photo": "https://cdn3.iconfinder.com/data/icons/german-shepherd-dog-face/800/mad_dog-512.png"
        },
        {
          "code_name": "",
          "weapon": "Parkour",
          "contact_info": "jb@gmail.com",
          "age": 27,
          "price": 25,
          "rating": 7,
          "kills": 48,
          "assassin_photo": "https://cdn3.iconfinder.com/data/icons/unigrid-phantom-human-vol-3-1/60/011_101_anonymous_anonym_hacker_vendetta_user_human_avatar-512.png"
        },
        {
          "code_name": "Baba Yaga",
          "weapon": "Lots of guns",
          "contact_info": "babayaga@gmail.com",
          "age": 35,
          "price": 50,
          "rating": 9.5,
          "kills": 433,
          "assassin_photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3MGt73sT4lTdsv6YFYScRlbI2LsNSvgYRjoqw93IKeoNxd1lY"
        },
        {
          "code_name": "",
          "weapon": "Pistol",
          "contact_info": "bmf@gmail.com",
          "age": 26,
          "price": 15,
          "rating": 6.5,
          "kills": 13,
          "assassin_photo": "https://cdn3.vectorstock.com/i/1000x1000/40/12/flat-icon-on-theme-save-whales-killer-whale-vector-18494012.jpg"
        },
        {
          "code_name": "The Professional",
          "weapon": "Everything",
          "contact_info": "leon@gmail.com",
          "age": 41,
          "price": 30,
          "rating": 8.5,
          "kills": 87,
          "assassin_photo": "https://www.telegraph.co.uk/content/dam/technology/2017/11/01/silly_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.png?imwidth=450"
        },
        {
          "code_name": "Nikita, La Femme Nikita",
          "weapon": "Silenced pistols",
          "contact_info": "nikita@gmail.com",
          "age": 28,
          "price": 30,
          "rating": 7,
          "kills": 32,
          "assassin_photo": "https://cdn2.iconfinder.com/data/icons/fantasy-characters/512/assassin2-512.png"
        },
        {
          "code_name": "Solenya",
          "weapon": "Lasers and office supplies",
          "contact_info": "rsanchez@gmail.com",
          "age": 60,
          "price": 0,
          "rating": 8,
          "kills": 24,
          "assassin_photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSToogM7uOEmy1xsWpKIAvgDnUC4LieNOxDoylAveVo4XAZC58m"
        }
      ]);
    });
};
