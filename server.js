const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
app.use(express.json());
app.use(cors('*'));

app.get('/',(req, res)=>{
    
        res.send(req.body)

});

app.get('/api', (req, res)=>{
    res.send(req.body);
});

app.listen(process.env.PORT || 3000, ()=>{
    console.log('servidor rodfwedqwdwqwfwefando!')
})