const routes = require('express').Router();
const controller = require('../controllers/index');

routes.get('/', controller.normalRoute);
routes.get('/chandra', controller.chandraRoute);
routes.get('/rebecca', controller.rebeccaRoute);

module.exports = routes;