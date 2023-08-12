const { User } = require('../models');

const userdata =
[
  {
    "username" : "sanpy",
    "name": "Andrew",
    "email": "sanpygames@gmail.com",
    "password": "password12345"
  }
]
const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;