const { Model, DataTypes } = require('sequelize');

class Genre extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
      },
      { sequelize }
    );
  }

  static associate(models) {
    this.belongsToMany(models.Game, {
      foreignKey: 'genre_id',
      through: 'game_genres',
      as: 'games',
    });
  }
}

module.exports = Genre;
