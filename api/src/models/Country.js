const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country',
   {
    id:{
      type: DataTypes.STRING(3), //! repasar
      allowNull:false,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    img:{
      type: DataTypes.STRING, //! revisar por si no muestra la img de la bandera
      allowNull: false,
    },

    continent:{
      type: DataTypes.STRING,
      allowNull: false,
    },

    capital:{
      type: DataTypes.STRING, //! repasar
      // type: DataTypes.STRING,
      allowNull: false
    },

    subregion:{
      type: DataTypes.STRING,
      // allowNull: true,
    },

    area:{
      type: DataTypes.INTEGER, //! comprobar "area: 6.0"
      // allowNull: true
    },

    population:{
      type: DataTypes.INTEGER,
      allowNull: false,
    }
    
   },
   {timestamps: false} //* le quito las comumnas que registarn los datos de guardado y edicion
  );
};
