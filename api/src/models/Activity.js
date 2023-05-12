const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "activity",
    {
      id: {
        type: DataTypes.UUID, //! repasar
        defaultValue: DataTypes.UUIDV4, //! agragado al ultimo
        allowNull: false,
        primaryKey: true,
        // defaultValue: DataTypes.UUIDV4, //! agragado al ultimo
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      difficulty: {
        type: DataTypes.ENUM('1','2','3','4','5'), //! supongo que cada numero es un string
        allowNull: false,
      },

      duration: {
        type: DataTypes.INTEGER, //! Duración (en horas). veridicar que no pueda ser un TIME
      },

      season: {
        type: DataTypes.ENUM("Verano", "Otoño", "Invierno", "Primavera"),
        allowNull: false,
      },
    },
    
    { timestamp: false } //* le quito las comumnas que registarn los datos de guardado y edicion
  );
};
