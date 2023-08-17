const router = require('express').Router();
const { Character, Class, User } = require('../models');
const withAuth = require('../utils/auth');

// main landing page
router.get('/', async (req, res) => {
  try {
    const characters = await Character.findAll();
    const classes = await Class.findAll();
    const users = await User.findAll();

    res.render('homepage', {
      characters, 
      classes, // {{#each classes as |class|}}
      users   // {{user.name}}
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Specific character Page
router.get('/character/:characterId', async (req, res) => {
  try {
    const character = await Character.findByPk(req.params.characterId);

    if (!character) {
      return res.status(404).render('not-found');
    }

    res.render('character', {
      character
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Render the character creation form
router.get('/create-character', async (req, res) => {
  // res.render('createCharacter');
  try {
    const classes = await Class.findAll();
    
    res.render('createCharacter', {
      classes
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



// View other User page
router.get('/user/:userId', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.userId);

    if (!user) {
      return res.status(404).render('not-found');
    }

    res.render('userProfile', {
      user
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// view main
router.get('/main', (req, res) => {
  res.render('mainPage');
});

// login page
router.get('/login', (req, res) => {
  console.log("login route")
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});


// redirect to logged in user page
router.get('/profile', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [
        {
          model: Character
        }
      ]
    });
    if (!userData) {
      return res.status(404).render('not-found');
    }

    const user = userData.get({ plain: true });
    console.log(user);
    res.render('profile', {
      ... user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;