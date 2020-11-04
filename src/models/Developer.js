const { Model, DataTypes } = require('sequelize');

class Developer extends Model {
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
      foreignKey: 'developer_id',
      through: 'game_developers',
      as: 'games',
    });
  }
}

module.exports = Developer;
