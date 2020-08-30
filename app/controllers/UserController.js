const { User } = require('../database/db');

module.exports =  {
    async all (req, res) {
         let users = await User.findAll();
         res.status(200).json(users);
    }
}