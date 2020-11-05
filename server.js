const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);

const cors = require('cors');
const bodyParser = require("body-parser");


app.use(express.json());
app.use(cors('*'));



server.listen(process.env.PORT || 3000, ()=>{
    console.log('servidor rodando!')
})


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

io.on('connection', socket=>{

    console.log('new Client');

    app.post('/', (req, res)=>{
        console.log(req.body)
        socket.emit('FromApi',req.body);
        res.end();
    })
});


// io.on("connection", (socket) => {
//     console.log("New client connected");
//     setInterval(() => getApiAndEmit(socket), 2000);

//   });
  
//   const getApiAndEmit = socket => {
//     const response = new Date();
//     // Emitting a new message. Will be consumed by the client
//     socket.emit("FromAPI", response);
//     console.log(response)
//   };




app.get('/', (req, res)=>{
res.send('Hello word pola')
})

