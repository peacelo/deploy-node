const express = require('express');
const cors = require('cors');

const bodyParser = require("body-parser");

const app = express();

app.use(express.json());
app.use(cors('*'));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/', (req, res)=>{
    console.log(req.body.model.action);
    res.send(req.body);
})

app.get('/', (req, res)=>{
res.send('Hello')
})

app.listen(process.env.PORT || 3000, ()=>{
    console.log('servidor rodfwedqwdwqwfwefando!')
})