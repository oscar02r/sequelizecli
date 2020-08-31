'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
     await queryInterface.createTable('addresses',
      { 
        id: {
         type: Sequelize.INTEGER,
         primaryKey:true,
         allowNull:false,
         autoIncrement: true
        } ,
        street:{
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue:"Gualluvin Olivo"
        },
        user_id:{
          type: Sequelize.INTEGER,
          allowNull: false,
          references:{
            model:"users",
            key:"id"
          },
          onDelete:"CASCADE",
          onUpdate: "CASCADE"
        }
      });
     
  },

  down: async (queryInterface, Sequelize) => {
   
      await queryInterface.dropTable('addresses');
     
  }
};
