const Game = require('../models/Game');
const Engine = require('../models/Engine');

const findOptions = {
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
    {
      association: 'publishers',
      attributes: ['id', 'name'],
      through: { attributes: [] },
    },
  ],
  attributes: ['id', 'name', 'release_date', 'description'],
};

module.exports = {
  async findByPk(req, res) {
    const { id } = req.params;

    const game = await Game.findByPk(id, findOptions);

    if (!game) {
      return res.status(404).json({ error: `Game not found with id ${id}` });
    }

    return res.json(game);
  },

  async index(req, res) {
    let { page, limit } = req.query;
    page = parseInt(page) || 1;
    limit = parseInt(limit) || 10;
    const offset = limit * (page - 1);

    if (limit > 20 || limit < 1) {
      return res
        .status(400)
        .json({ error: 'The limit must be between 1 and 20' });
    }

    if (page < 1) {
      return res.status(400).json({ error: 'The page must be greater than 0' });
    }

    findOptions.limit = limit;
    findOptions.offset = offset;
    const games = await Game.findAll(findOptions);

    return res.json(games);
  },

  async store(req, res) {
    const {
      name,
      release_date,
      description,
      engine_id,
      genres_ids,
      developers_ids,
      publishers_ids,
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

    if (publishers_ids && publishers_ids.length > 0) {
      game.setPublishers(publishers_ids);
    }

    return res.json(game);
  },

  async delete(req, res) {
    const { id } = req.params;

    const game = await Game.destroy({ where: { id } });

    return res.json(game);
  },
};
