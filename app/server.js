const express = require('express');
const { sequelize } = require('./models/index');

const app = new express();


//Setting
const PORT = process.env.PORT || 4000;
//Middleware
//to fill body
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Paths
app.use('/', require('./routes'));


app.listen(PORT, () => {
    console.log(`La app ha arrancado en hhtp://localhost:${PORT}`);
    sequelize.authenticate().then(()=>{
        console.log('Connection success');
    });
    
});