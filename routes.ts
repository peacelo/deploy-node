import { Router } from 'express';


import CardMateriasController from './src/controllers/CardMateriasController';

const routes = Router();

routes.get('/cards', CardMateriasController.getCards);
routes.get('/cardsAttachments', CardMateriasController.getCardAttachment);

export default routes;