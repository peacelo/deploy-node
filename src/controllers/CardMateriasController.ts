import CardMaterias from '../models/CardMaterias'
import fetch from 'node-fetch';


const idModel = '5e77c872aafd4f367e9436d9';
const url = `https://api.trello.com/1/boards/${idModel}/cards/visible?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_API_TOKEN}`;

const urlAttachments = `https://api.trello.com/1/cards/5f9b0c9dd953e082fb24a5fb/attachments?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_API_TOKEN}`


module.exports = {
    getCards: async (req, res)=>{
        const cards = await fetch(url).then(res => res.json()).catch(err => console.log(err));

        cardsName = cards.map(card => new CardMaterias(card));
        res.status(200).send(cardsName);
    },
    getCardAttachment: async (req, res)=>{
        const cardAttachment = await fetch(urlAttachments).then(res => res.json()).catch(err => console.log(err));
        res.status(200).send(cardAttachment);
    }
    // getCardAttachments: async(req, res)=>{
    //     const card = new CardMaterias(card)
    //     const cards = await fetch(url).then(res => res.json()).catch(err => console.log(err));
    //     cardAttachments = cards.map(card => );
    //     res.status(200).send(cardsName);
    // }
}
