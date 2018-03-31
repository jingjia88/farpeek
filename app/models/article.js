// Example model


module.exports = (sequelize, DataTypes) => {

  const article = sequelize.define('article', {
    theme: DataTypes.TEXT,
    essay: DataTypes.TEXT,
  }, {
    classMethods: {
      associate: (models) => {
        // example on how to add relations
        // Article.hasMany(models.Comments);
      }
    }
  });

  return article;
  
};

