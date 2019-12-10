const express = require('express');
const routes = new express.Router();

//const UserController = require('../controllers/UserController');
const GuestController = require('../controllers/GuestController');

routes.get('/test', (req, res) => {
    res.send('está no caminho certo')
})
routes.get('/code/:id', GuestController.index);
routes.post('/guest', GuestController.call);

module.exports = routes;