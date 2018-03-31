// Example model


module.exports = (sequelize, DataTypes) => {

  const album = sequelize.define('album', {
    name: DataTypes.TEXT,
    picture: DataTypes.STRING,
  }, {
    classMethods: {
      associate: (models) => {
        // example on how to add relations
        // Article.hasMany(models.Comments);
      }
    }
  });

  return album;
};

