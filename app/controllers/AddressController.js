const {Address} = require('../models/index');

module.exports = {
    async all(req, res){
            const addresses = await Address.findAll({
                attributes: ['street'],
                include: {
                    association:"residente",
                    attributes: ["name"]
                }
            });

            res.status(200).json(addresses);
    }
}