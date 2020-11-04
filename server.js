const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
app.use(express.json());
app.use(cors('*'));


const APIKey = '02b8303f3c296818e1d5f30b3dd944db'
const APIToken = 'f0a48555f471168e3ed7d553ac0462c834b947fa2ac86c28f0f744b5f5e683bb';

const url = `https://api.trello.com/1/tokens/${APIToken}/webhooks/?key=${APIKey}`;

app.get('/', async (req, res)=>{

        const body = {
            "description": "My first webhook",
            "callbackURL": "https://deploy-example123.herokuapp.com/api",
            "idModel": "RLIihjSy"
        }
    
        const response = await fetch(url, {
            method: 'post',
            body: JSON.stringify(body),
            headers: {'Content-Type': 'application/json'}
        });
        const json = await response.json();
    
        res.send(json)

});

app.get('/api', (req, res)=>{
    res.send(req.body);
});

app.listen(process.env.PORT || 3000, ()=>{
    console.log('servidor rodfwedqwdwqwfwefando!')
})