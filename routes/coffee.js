

const express = require('express');

const router = express.Router(); // eslint-disable-line new-cap

const { Middleware } = require('chinchay');
const coffeeController = require('../controllers/coffeeController');


router.get('/coffee/', (req, res, next) => {
  coffeeController.index(req, res, next);
});

router.get('/coffee/new', (req, res, next) => {
  coffeeController.new(req, res, next);
});

router.get('/coffee/:id', (req, res, next) => {
  coffeeController.show(req, res, next);
});

router.get('/coffee/:id/edit', (req, res, next) => {
  coffeeController.edit(req, res, next);
});


module.exports = router;
