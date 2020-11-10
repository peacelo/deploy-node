const { Router } = require('express');


const CardMateriasController = require('./src/controllers/CardMateriasController');

const routes = Router();

routes.get('/cards', CardMateriasController.getCards);
routes.get('/cardsAttachments', CardMateriasController.getCardAttachment);

module.exports = routes;