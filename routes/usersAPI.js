

const express = require('express');

const router = express.Router(); // eslint-disable-line new-cap

const { Middleware } = require('chinchay');
const usersController = require('../controllers/usersController');


// CREATE

router.post('/api/users/new', (req, res, next) => {
  usersController.create(req, res, next);
});

router.get('/api/users/template', Middleware.hasAccess, (req, res, next) => {
  usersController.template(req, res, next);
});

// READ

router.get('/api/users/find', Middleware.hasAccess, (req, res, next) => {
  usersController.find(req, res, next);
});

router.get('/api/users/count', Middleware.hasAccess, (req, res, next) => {
  usersController.count(req, res, next);
});

router.get('/api/users/:id', Middleware.hasAccess, (req, res, next) => {
  usersController.findById(req, res, next);
});

// UPDATE

router.put('/api/users/:id/edit', Middleware.hasAccess, (req, res, next) => {
  usersController.update(req, res, next);
});

router.post('/api/users/:id/edit', Middleware.hasAccess, (req, res, next) => {
  usersController.update(req, res, next);
});

router.patch('/api/users/:id/edit', Middleware.hasAccess, (req, res, next) => {
  usersController.update(req, res, next);
});

// DELETE

router.delete('/api/users/:id', Middleware.hasAccess, (req, res, next) => {
  usersController.delete(req, res, next);
});

// LOGIN

router.post('/api/login', (req, res, next) => {
  usersController.login(req, res, next);
});

// ACCESS

router.post('/api/users/:id/add/access', Middleware.hasAccess, (req, res, next) => {
  usersController.addAccess(req, res, next);
});


module.exports = router;
