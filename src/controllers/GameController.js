const Game = require('../models/Game');
const Engine = require('../models/Engine');
const Genre = require('../models/Genre');

const Sequelize = require('sequelize');

module.exports = {
  async index(req, res) {
    const games = await Game.findAll({
      include: { association: 'engine' },
      attributes: [
        'name',
        'release_date',
        'description',
        'createdAt',
        'updatedAt',
      ],
    });

    return res.json(games);
  },

  async store(req, res) {
    const { name, release_date, description, engine } = req.body;

    engine = await Engine.findOrCreate({ where: { name: engine } });

    const game = await Game.create({
      name,
      release_date,
      description,
      engine_id: engine.id,
    });

    return res.json(game);
  },
};
