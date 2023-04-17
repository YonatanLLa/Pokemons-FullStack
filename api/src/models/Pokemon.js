const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Pokemon",
    {
      name: {
        type: DataTypes.STRING,
        // allowNull: false,
      },
      id: {
        type: DataTypes.UUID, //TIPO UUID
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4, //SE VAN A CREAR AUTOMATICAMENTE
        // type: DataTypes.INTEGER,
        // allowNull: false,
        // primaryKey: true,
        // autoIncrement: true,
      },
      hp: {
        type: DataTypes.INTEGER,
      },
      attack: {
        type: DataTypes.INTEGER,
      },
      defense: {
        type: DataTypes.INTEGER,
      },
      speed: {
        type: DataTypes.INTEGER,
      },
      height: {
        type: DataTypes.INTEGER,
      },
      weight: {
        type: DataTypes.INTEGER,
      },
      image: {
        type: DataTypes.STRING,
        
      },
      created:{
        type:DataTypes.BOOLEAN,
        defaultValue: true,
    }
    },
    {
      timestamps: false,
    }
  );
};
