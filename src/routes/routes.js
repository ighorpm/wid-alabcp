const express = require('express');
const routes = new express.Router();

const GuestController = require('../controllers/GuestController');

routes.get('/code/:id', GuestController.index);
routes.post('/guest', GuestController.call);

module.exports = routes;