const Sequelize = require('sequelize');
const config = require('../config/database');

const Engine = require('../models/Engine');
const Game = require('../models/Game');
const Genre = require('../models/Genre');
const Developer = require('../models/Developer');
const Publisher = require('../models/Publisher');

const sequelize = new Sequelize(config);

Engine.init(sequelize);
Game.init(sequelize);
Genre.init(sequelize);
Developer.init(sequelize);
Publisher.init(sequelize);

Engine.associate(sequelize.models);
Game.associate(sequelize.models);
Genre.associate(sequelize.models);
Developer.associate(sequelize.models);

module.exports = sequelize;
