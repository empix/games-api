const { Model, DataTypes } = require('sequelize');

class Engine extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
      },
      { sequelize }
    );
  }

  static associate(models) {
    this.hasMany(models.Game, { foreignKey: 'engine_id', as: 'games' });
  }
}

module.exports = Engine;
