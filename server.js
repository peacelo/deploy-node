const express = require('express');

const app = express();

const http = require('http');

const server = http.createServer(app);


const io = require('socket.io')(server);

require('dotenv/config')

const cors =  require('cors') 

const bodyParser = require('body-parser'); 
const routes = require('./routes') 

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

