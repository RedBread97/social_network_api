const connection = require('../config/connection');
const { Users, Thoughts } = require('../models');
const { userSeeds } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('Connected');
    

    //delete existing data.
    await Users.deleteMany({});
    await Thoughts.deleteMany({});

    //Seed users with the data in the data.js file.
    await Users.collection.insertMany(userSeeds);
    console.info('Seeding complete! 🌱');
    console.table(userSeeds);
    process.exit(0);
});