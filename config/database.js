require('dotenv').config();

module.exports = {

  // Conexion
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,

  //Configurar Seed
 // seederStorage: "json",
   seederStorage:"sequelize",
  //seederSotoragePath:"sequelizeSeeds.json",
   seederStorageTableName: "seeds",

  //Configurar Migraciones
  migrationStorage:"sequelize",
  migrationStorageTableName:"migrations",
  
  define:{
    timestamps: false,
    //Genera claves foraneas de este tipo user_id en ves de userId
    underscored: true
  }
   
}