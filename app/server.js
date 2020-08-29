const express = require('express');
const { connection } = require('./database/db');

const app = new express();


//Setting
const PORT = process.env.PORT || 5000;
//Middleware
//to fill body
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.listen(PORT, () => {
    console.log(`La app ha arrancado en hhtp://localhost:${PORT}`);
    connection.sync({force: true})
    .then(()=>{
        console.log('Connection success');
    });
    
});