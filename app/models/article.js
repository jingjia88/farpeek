// Example model


module.exports = (sequelize, DataTypes) => {

  const Article = sequelize.define('Article', {
    name: DataTypes.STRING,
    phonenumber: DataTypes.STRING,
  }, {
    classMethods: {
      associate: (models) => {
        // example on how to add relations
        // Article.hasMany(models.Comments);
      }
    }
  });

  return Article;
};

