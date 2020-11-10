const Sequelize = require('sequelize');
const config = require('../config/database');

const Engine = require('../models/Engine');
const Game = require('../models/Game');
const Genre = require('../models/Genre');
const Developer = require('../models/Developer');
const Publisher = require('../models/Publisher');

const sequelize = new Sequelize(config);

Game.init(sequelize);
Engine.init(sequelize);
Genre.init(sequelize);
Developer.init(sequelize);
Publisher.init(sequelize);

Game.associate(sequelize.models);
Engine.associate(sequelize.models);
Genre.associate(sequelize.models);
Developer.associate(sequelize.models);
Publisher.associate(sequelize.models);

module.exports = sequelize;
