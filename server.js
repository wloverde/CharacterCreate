const express = require('express');
const morgan = require('morgan'); // Require Morgan
const session = require('express-session');
const routes = require('./controllers');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Custom Morgon log that includes HTTP method, URL, response status, and response time
const customLog = ':method :url - Status: :status, Response Time: :response-time ms';

// Use custom Morgan middleware
app.use(morgan(customLog));

const sess = {
  secret: 'Secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));
// Inform Express.js on which template engine to use

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening at 3001'));
});
