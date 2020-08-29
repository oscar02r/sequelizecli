const express = require('express');

const app = new express();
//const sequelize = require('./database/db');
//require('./database/association');

//Setting
const PORT = process.env.PORT || 5000;
//Middleware
//to fill body
app.use(express.json());
app.use(express.urlencoded({extended: false}));


/*//Paths
app.use('/api/users', require('./routes/users'));
app.use('/api/posts', require('./routes/posts'));
app.use('/api/addresses', require('./routes/addresses'));
*/
app.listen(PORT, () => {
    console.log(`La app ha arrancado en hhtp://localhost:${PORT}`);

    
});