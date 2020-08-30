'use strict';

const faker = require('faker');

const { User, Address }= require('../../models/index');
const { username } = require('../../../config/database');

module.exports = {
  up: async (queryInterface, Sequelize) => {
      
    let addresses = [];
    const users = await User.findAll();
    
    users.forEach(user=>{
        addresses.push({
          street:faker.address.streetName(),
          user_id:user.id
        });
    });

     await queryInterface.bulkInsert('addresses', addresses
    , {});
    
  },

  down: async (queryInterface, Sequelize) => {
 
    await queryInterface.bulkDelete('addresses', null, {});
     
  }
};
