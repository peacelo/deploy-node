const { Router } = require('express');

const CardMateriasController = require('./controllers/CardMateriasController');

const routes = Router();

routes.get('/cards', CardMateriasController.getCards);
routes.get('/cardsAttachments', CardMateriasController.getCardAttachment);

export default routes;