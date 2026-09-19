const routes = require('express').Router();

const lesson1Controller = require('../controllers/lesson1');


routes.get('/', lesson1Controller.home);
routes.get('/week01', lesson1Controller.week01);

module.exports = routes;