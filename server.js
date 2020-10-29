const express = require('express');

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
    }).then(res => console.log(res.json())).then(data => console.log(data)).catch(err => console.log(err))

});

app.get('/api', (req, res)=>{
    const data = req.body;
    res.json({data})
});

app.listen(process.env.PORT || 3000, ()=>{
    console.log('servidor rodfwedqwdwqwfwefando!')
})