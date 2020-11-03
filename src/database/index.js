const Sequelize = require('sequelize');
const config = require('../config/database');

const Engine = require('../models/Engine');
const Game = require('../models/Game');

const sequelize = new Sequelize(config);

Engine.init(sequelize);
Game.init(sequelize);

Engine.associate(sequelize.models);
Game.associate(sequelize.models);

module.exports = sequelize;
