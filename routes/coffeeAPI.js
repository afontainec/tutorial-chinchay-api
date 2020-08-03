

const express = require('express');

const router = express.Router(); // eslint-disable-line new-cap

const { Middleware } = require('chinchay');
const coffeeController = require('../controllers/coffeeController');


// CREATE

router.post('/api/coffee/new', Middleware.hasAccess, (req, res, next) => {
  coffeeController.create(req, res, next);
});

router.get('/api/coffee/template', Middleware.hasAccess, (req, res, next) => {
  coffeeController.template(req, res, next);
});

// READ

router.get('/api/coffee/find', Middleware.hasAccess, (req, res, next) => {
  coffeeController.find(req, res, next);
});

router.get('/api/coffee/count', Middleware.hasAccess, (req, res, next) => {
  coffeeController.count(req, res, next);
});

router.get('/api/coffee/:id', Middleware.hasAccess, (req, res, next) => {
  coffeeController.findById(req, res, next);
});

// UPDATE

router.put('/api/coffee/:id/edit', Middleware.hasAccess, (req, res, next) => {
  coffeeController.update(req, res, next);
});

router.post('/api/coffee/:id/edit', Middleware.hasAccess, (req, res, next) => {
  coffeeController.update(req, res, next);
});

router.patch('/api/coffee/:id/edit', Middleware.hasAccess, (req, res, next) => {
  coffeeController.update(req, res, next);
});

// DELETE

router.delete('/api/coffee/:id', Middleware.hasAccess, (req, res, next) => {
  coffeeController.delete(req, res, next);
});


module.exports = router;
