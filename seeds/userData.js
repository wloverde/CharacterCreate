const { User } = require('../models');

const userData =
[
  {
    "username" : "sanpy",
    "name": "Andrew",
    "email": "sanpygames@gmail.com",
    "password": "password12345"
  }
]
const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;