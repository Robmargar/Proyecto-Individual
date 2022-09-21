const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "videogame",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      descripcion: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      fecha_lanzamiento: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      raiting: {
        type: DataTypes.DECIMAL(3, 2),
        allowNull: true,
      },
      plataformas: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      generos: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );
};
