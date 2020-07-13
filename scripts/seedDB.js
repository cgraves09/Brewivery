const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/brewivery"
);

const brewerySeed = [
  {
  thumbnail: 'http://nebula.wsimg.com/c3f4db4f67b1fbb071e2f4390c758827?AccessKeyId=ECE3021154BAB0A6A3C0&disposition=0&alloworigin=1',
    name: 'Ookapow Brewing Company',
    address: '1142 Old Okeechobee Road, bay 13, West Palm Beach, Florida 33401',
    phone: '(561) 619-6188',
    website: 'http://www.ookapow.com/',
    lat: 26.699870,
    lng: -80.064370,
    beers: [
      {
      type: 'Growler',
      beer: 'Butterscotch cream ale',
      price: 22.99,
      },
      {
      type: 'Growler',
      beer: 'Irish Red',
      price: 23.99,
      },
      {
      type: 'Growler',
      beer: 'Double Mango Cream ale',
      price: 21.99,
      }
    ],
    rating: '4.6'
  },
  {
  thumbnail: 'https://www.steamhorsebrewing.com/wp-content/uploads/2018/06/cropped-Steamhorse-Brewing-name-only.png',
    name: 'Steam Horse Brewing',
    address: '1500 Elizabeth Ave, West Palm Beach, FL 33401',
    phone: '(561) 623-0091',
    website: 'https://www.steamhorsebrewing.com/',
    lat: 26.698280,
    lng: -80.064490,
    beers: [
      {
      type: 'Growler',
      beer: 'Bless Your Tart',
      price: 19.99,
      },
      {
      type: 'Growler',
      beer: 'Boujee Berry',
      price: 20.99,
      },
      {
      type: 'Growler',
      beer: 'Grapefruit Mojito Twist',
      price: 25.99,
      }
    ],
    rating: '4.7'
  },
  {
  thumbnail: 'http://www.accomplicecider.com/images/new%20logo%20brighter.png?crc=415880431',
    name: 'Accomplice Brewery & Ciderworks',
    address: '1027 N Florida Mango Rd #3, West Palm Beach, FL 33409',
    phone: '(561) 568-7242',
    website: 'http://www.accomplicecider.com/',
    lat: 26.704880,
    lng: -80.079200,
    beers: [
      {
      type: 'Growler',
      beer: 'Limone Di Genoa Lemon Basil Cider',
      price: 17.00,
      },
      {
      type: 'Growler',
      beer: 'Mango Madness Mango Cider',
      price: 15.00,
      },
      {
      type: 'Growler',
      beer: 'Postcards From Ceylon',
      price: 14.00,
      }
    ],
    rating: '4.5'
  },
  {
    thumbnail: 'https://i2.wp.com/civilsocietybrewing.com/wp-content/uploads/2016/03/IMG_1421-Edit.jpg?resize=1024%2C683&ssl=1',
    name: 'Civil Society Brewing Co.',
    address: '425 Kanuga Dr, West Palm Beach, FL 33401',
    phone: '(561) 444-3538',
    website: 'https://civilsocietybrewing.com/',
    lat: 26.697310,
    lng: -80.055330,
    beers: [
      {
      type: 'Growler',
      beer: 'Cake Eater w/ Maple',
      price: 21.00,
      },
      {
      type: 'Growler',
      beer: 'Fresh Strata',
      price: 19.00,
      },
      {
      type: 'Growler',
      beer: 'Grandma’s Lemonade',
      price: 23.00,
      }
    ],
    rating: '4.7'
  },
  {
    thumbnail: 'https://www.americancraftaleworks.com/wp-content/uploads/2019/04/aca_logo_sm.png',
    name: 'American Craft Aleworks',
    address: '200 Clematis St, West Palm Beach, FL 33401',
    phone: '(561) 425-5799',
    website: 'americancraftaleworks.com',
    lat: 26.713020,
    lng: -80.051600,
    beers:[ 
      {
      type: 'Growler',
      beer: 'Dairy Farmer\'s Daughter',
      price: 25.00,
      },
      {
      type: 'Growler',
      beer: 'I Dream Of...Cream Ale',
      price: 22.00,
      },
      {
      type: 'Growler',
      beer: 'I\'m A Bramblin Man',
      price: 21.00,
      }
  ],
    rating: '4.6'
  },

  
];

db.Brewery
  .remove({})
  .then(() => db.Brewery.collection.insertMany(brewerySeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
