// Example model


module.exports = (sequelize, DataTypes) => {

  const member = sequelize.define('member', {
    account: DataTypes.TEXT,
    password: DataTypes.TEXT,
  }, {
    classMethods: {
      associate: (models) => {
        // example on how to add relations
        // Article.hasMany(models.Comments);
      }
    }
  });

  return member;
};
