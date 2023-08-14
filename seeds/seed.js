const sequelize = require('../config/connection');

const seedUser = require('./userData');
const seedCharacter = require('./character/characterData');
const seedClass = require('./character/classData');
const seedCharAbility = require('./character/characterAbility');
const seedAbility = require('./character/abilityData');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedUser();
  await seedCharacter();
  await seedClass();
  await seedCharAbility();
  await seedAbility();
  
  process.exit(0);
};

seedDatabase();
