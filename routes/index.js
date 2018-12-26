const { Router } = require('express');
const todosRouter = require('./todos');

const routes = Router();

routes.use('/', todosRouter);

module.exports = routes;