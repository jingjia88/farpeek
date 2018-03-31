// Example model


module.exports = (sequelize, DataTypes) => {

  const board = sequelize.define('board', {
    theme: DataTypes.TEXT,
    message: DataTypes.TEXT,
  }, {
    classMethods: {
      associate: (models) => {
        // example on how to add relations
        // Article.hasMany(models.Comments);
      }
    }
  });

  return board;
};
