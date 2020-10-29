const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    res.send('hello,qwdwdqdqdqwd world !');
});

app.listen(process.env.PORT || 3000, ()=>{
    console.log('servidor rodfwewfwefando ! ')
})