const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();

app.use(cors('*'));
app.use(express.json());

const APIKey = '02b8303f3c296818e1d5f30b3dd944db'
const APIToken = 'f0a48555f471168e3ed7d553ac0462c834b947fa2ac86c28f0f744b5f5e683bb';

const url = `https://api.trello.com/1/tokens/${APIToken}/webhooks/?key=${APIKey}`;

app.get('/', (req, res)=>{
    
    fetch(url, {
        
        method: 'POST',
        body: JSON.stringify({
            description: "My first webhook",
            callbackURL: "https://deploy-example123.herokuapp.com/api",
            idModel: "RLIihjSy"
        }),
        mode:"no-cors",
        headers: {'Content-Type':'application/json'},
    }).then( res => res.json()).then(data => res.send(data)).catch(err=> res.send(err))

});

app.get('/api', (req, res)=>{
    const error = req;
    console.log(error);
    console.log(res)
});

app.listen(process.env.PORT || 3000, ()=>{
    console.log('servidor rodfwedqwdwqwfwefando!')
})