const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);

const cors = require('cors');
const bodyParser = require("body-parser");


app.use(express.json());
app.use(cors('*'));


const getApiSocket = socket =>{
    const response = new Date();
    

}

server.listen(process.env.PORT || 3000, ()=>{
    console.log('servidor rodando!')
})


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/', (req, res)=>{
    console.log(req.body.action);
    res.send(req.body);
    console.log('testando API');

    io.on('connection', socket=>{
        console.log('new socket');
        
        socket.emit('FromApi', req.body.action);
    })
})

app.get('/', (req, res)=>{
res.send('Hello word pola')
})

