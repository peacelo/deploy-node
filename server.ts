import express from 'express';
const app = express();

import http from 'http';

const server = http.createServer(app);

import socketIo from 'socket.io';
const io = socketIo(server);

import 'dotenv/config';

import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './routes'

app.use(express.json());
app.use(cors());


server.listen(process.env.PORT || 3000, ()=>{
    console.log('servidor rodando!')
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes)

io.on('connection', socket =>{

    console.log('new Client');

    app.post('/', (req, res)=>{
        console.log(req.body)
        socket.emit('FromApi',req.body);
        res.end();
    })
});

app.get('/', (req, res)=>{
res.send('Hello word pola')
})

