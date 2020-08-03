

const express = require('express');

const router = express.Router(); // eslint-disable-line new-cap

const { Middleware } = require('chinchay');
const teaController = require('../controllers/teaController');


// CREATE

router.post('/api/tea/new', Middleware.hasAccess, (req, res, next) => {
  teaController.create(req, res, next);
});

router.get('/api/tea/template', Middleware.hasAccess, (req, res, next) => {
  teaController.template(req, res, next);
});

// READ

router.get('/api/tea/find', Middleware.hasAccess, (req, res, next) => {
  teaController.find(req, res, next);
});

router.get('/api/tea/count', Middleware.hasAccess, (req, res, next) => {
  teaController.count(req, res, next);
});

router.get('/api/tea/:id', Middleware.hasAccess, (req, res, next) => {
  teaController.findById(req, res, next);
});

// UPDATE

router.put('/api/tea/:id/edit', Middleware.hasAccess, (req, res, next) => {
  teaController.update(req, res, next);
});

router.post('/api/tea/:id/edit', Middleware.hasAccess, (req, res, next) => {
  teaController.update(req, res, next);
});

router.patch('/api/tea/:id/edit', Middleware.hasAccess, (req, res, next) => {
  teaController.update(req, res, next);
});

// DELETE

router.delete('/api/tea/:id', Middleware.hasAccess, (req, res, next) => {
  teaController.delete(req, res, next);
});


module.exports = router;
