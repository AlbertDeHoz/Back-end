const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./routes/api')

require('./db');

const app = express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))   

app.use('/api',apiRouter);

app.get('/',(req,res)=>{
    res.send('Hola mundo');
});


app.listen(3000,()=> {
    console.log("Servidor levantado");
});