const routes = require('express').Router();

const lesson1Controller = require('../controllers/lesson1');


routes.get('/', lesson1Controller.routeOne);
routes.get('/routeTwo', lesson1Controller.routeTwo);
routes.get('/routeThree', lesson1Controller.routeThree);

module.exports = routes;