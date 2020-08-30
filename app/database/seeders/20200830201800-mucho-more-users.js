'use strict';
const faker = require('faker'); 

const { User } = require('../../models/index');

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return Promise.all([
       User.create({
         name: faker.name.findName(),
         age: 32,
         domicilio:{
           street: faker.address.streetName()
         }
       },{
         include:"domicilio"
       }),
       User.create({
         name: faker.name.findName(),
         age:32,
         domicilio:{
           street: faker.address.streetName()
         }
       },{
         include:"domicilio"
       })
     ]);
    
  },

  down: async (queryInterface, Sequelize) => {
          /* queryInterface.bulkDelete('addresse',{
             
           },{});*/
     
     await queryInterface.bulkDelete('users', {
       age:32
     }, {});
     
  }
};
