const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors('*'));




app.post('/', (req, res)=>{
    res.json(req.body);
});

app.get('/', (req, res)=>{
res.send('Servidor Hodando no Heroku')
});



app.listen(process.env.PORT || 3000, ()=>{
    console.log('servidor rodfwedqwdwqwfwefando!')
})