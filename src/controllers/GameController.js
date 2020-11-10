const Game = require('../models/Game');
const Engine = require('../models/Engine');

module.exports = {
  async index(req, res) {
    const games = await Game.findAll({
      include: [
        { association: 'engine', attributes: ['id', 'name'] },
        {
          association: 'genres',
          attributes: ['id', 'name'],
          through: { attributes: [] },
        },
        {
          association: 'developers',
          attributes: ['id', 'name'],
          through: { attributes: [] },
        },
      ],
      attributes: ['id', 'name', 'release_date', 'description'],
    });

    return res.json(games);
  },

  async store(req, res) {
    const {
      name,
      release_date,
      description,
      engine_id,
      developers_ids,
      genres_ids,
    } = req.body;

    const engine = await Engine.findByPk(engine_id);

    if (!engine) {
      return res
        .status(400)
        .json({ error: `Engine not found with id ${engine_id}` });
    }

    const game = await Game.create({
      name,
      release_date,
      description,
      engine_id,
    });

    if (genres_ids && genres_ids.length > 0) {
      game.setGenres(genres_ids);
    }

    if (developers_ids && developers_ids.length > 0) {
      game.setDevelopers(developers_ids);
    }

    return res.json(game);
  },

  async delete(req, res) {
    const { id } = req.body;

    const game = await Game.destroy({ where: { id } });

    return res.json(game);
  },
};
