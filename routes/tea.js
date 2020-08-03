

const express = require('express');

const router = express.Router(); // eslint-disable-line new-cap

const { Middleware } = require('chinchay');
const teaController = require('../controllers/teaController');


router.get('/tea/', (req, res, next) => {
  teaController.index(req, res, next);
});

router.get('/tea/new', (req, res, next) => {
  teaController.new(req, res, next);
});

router.get('/tea/:id', (req, res, next) => {
  teaController.show(req, res, next);
});

router.get('/tea/:id/edit', (req, res, next) => {
  teaController.edit(req, res, next);
});


module.exports = router;
