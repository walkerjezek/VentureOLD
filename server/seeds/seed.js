const db = require('../config/connection');
const { Activity } = require('../models');

const activityData = require('./activityData.json');

db.once('open', async () => {
  await Activity.deleteMany({});

  const activities = await Activity.insertMany(activityData);

  console.log('Activities seeded!');
  process.exit(0);
});
