const publicRoutes = {
  'POST /user': 'UserController.register',
  'POST /register': 'UserController.register', // alias for POST /user
  'POST /login': 'UserController.login',
  'POST /validate': 'UserController.validate',
  'GET /teatrs/sync': 'TeatrController.sync',
  'GET /teatrs': 'TeatrController.getAll',
};

module.exports = publicRoutes;
