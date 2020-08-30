'use strict';

module.exports = {
  
  up: async (queryInterface, Sequelize) => {
  
    let users = [
      { name: "Aton", age: 20},
      { name: "Juan", age: 22},
      { name: "Lucia", age: 25},
      { name: "Nancy", age: 32},
    ];
    
     await queryInterface.bulkInsert('users', users, {});
   
  },

  down: async (queryInterface, Sequelize) => {
   
     await queryInterface.bulkDelete('users', null, {});
    
  }
};
