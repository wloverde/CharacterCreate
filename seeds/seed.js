const sequelize = require('../config/connection');

const seedUser = require('./userData');
const seedCharacter = require('./character/characterData');
const seedClass = require('./character/classData');
const seedCharAbility = require('./character/characterAbility');
const seedAbility = require('./character/abilityData');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedUser();
  await seedClass();
  await seedAbility();
  await seedCharAbility();
  await seedCharacter();
  
  process.exit(0);
};

seedDatabase();
