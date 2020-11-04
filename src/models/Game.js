const { Model, DataTypes } = require('sequelize');

class Game extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        release_date: DataTypes.DATE,
        description: DataTypes.TEXT,
      },
      { sequelize }
    );
  }

  static associate(models) {
    this.belongsTo(models.Engine, { foreignKey: 'engine_id', as: 'engine' });
    this.belongsToMany(models.Genre, {
      foreignKey: 'game_id',
      through: 'game_genres',
      as: 'genres',
    });
    this.belongsToMany(models.Developer, {
      foreignKey: 'game_id',
      through: 'game_developers',
      as: 'developers',
    });
  }
}

module.exports = Game;
