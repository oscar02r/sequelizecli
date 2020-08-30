const {Address} = require('../database/db');

module.exports = {
    async all(req, res){
            const addresses = await Address.findAll({
                attributes: ['street']
            });

            res.status(200).json(addresses);
    }
}