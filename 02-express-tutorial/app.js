const express = require('express');
const app = express();
let {people} = require('./data.js');

const port = 5000;

app.get('/', (req,res) => {
    res.status(200).json({success: true, data: people});
})

app.listen(port, ()=>{
    console.log(`Serveur à l'écoute sur le port ${port}`);
})