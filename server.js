const express = require('express');
const cors = require('cors')

const app = express();

app.use(cors('*'));
app.use(express.json())

app.get('/', (req, res)=>{
    fetch(url, {
        
        method: 'POST',
        body: {
            description: "My first webhook",
            callbackURL: "https://deploy-example123.herokuapp.com/api",
            idModel: "RLIihjSy"
        },
        mode:"no-cors",
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    }).then( res => res.json()).then(data => res.send(data)).catch(err=> res.send(err))

});

app.get('/api', (req, res)=>{
    const data = req.body;
    res.json({data})
});

app.listen(process.env.PORT || 3000, ()=>{
    console.log('servidor rodfwedqwdwqwfwefando!')
})