const Game = require('../models/Game');
const Engine = require('../models/Engine');

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
    const { name, release_date, description, engine_id } = req.body;

    const engine = await Engine.findByPk(1);

    if (!engine) {
      return res.status(400).json({ error: 'Engine not found' });
    }

    const game = await Game.create({
      name,
      release_date,
      description,
      engine_id,
    });

    return res.json(game);
  },
};
