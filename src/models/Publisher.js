const { Model, DataTypes } = require('sequelize');

class Publisher extends Model {
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
      foreignKey: 'publisher_id',
      through: 'game_publishers',
      as: 'games',
    });
  }
}

module.exports = Publisher;
