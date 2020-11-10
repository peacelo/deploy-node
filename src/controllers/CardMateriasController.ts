import CardMaterias from '../models/CardMaterias'
import fetch from 'node-fetch';
import {Request, Response} from 'express';
import fs from 'fs';

import Promise from 'bluebird';
import JsZip from 'jszip';
import FileSaver from 'file-saver';




const idModel = '5e77c872aafd4f367e9436d9';
const url = `https://api.trello.com/1/boards/${idModel}/cards/visible?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_API_TOKEN}`;

const urlAttachments = `https://api.trello.com/1/cards/5f9b0c9dd953e082fb24a5fb/attachments?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_API_TOKEN}`


export default {
    getCards: async (req: Request, res: Response)=>{
        const cards = await fetch(url).then(res => res.json()).catch(err => console.log(err));

        cardsName = cards.map(card => new CardMaterias(card));
        res.status(200).send(cardsName);
    },
    getCardAttachment: async (req, response)=>{
        const cardAttachment = await fetch(urlAttachments).then(res => res.json()).catch(err => console.log(err));
        const cardAttachmentsUrl = cardAttachment.map( card=> card.url);
        console.log(cardAttachmentsUrl);
        response.send(downloadAndZip(cardAttachmentsUrl));
    }
}
