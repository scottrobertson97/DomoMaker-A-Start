const controllers = require('./controllers/index.js');

const router = (app) => {
  app.get('/login', controllers.Account.loginPage);
  app.post('/login', controllers.Account.login);
  app.get('/signup', controllers.Account.signupPage);
  app.post('/signup', controllers.Account.signup);
  app.get('/logout', controllers.Account.logout);
  app.get('/maker', controllers.Domo.makerPager);
  app.get('/', controllers.Account.loginPage);
};

module.exports = router;
