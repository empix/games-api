const Engine = require('../models/Engine');

module.exports = {
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

    const engines = await Engine.findAll({
      attributes: ['id', 'name'],
      limit,
      offset,
    });

    return res.json(engines);
  },

  async store(req, res) {
    const { name } = req.body;

    const [engine] = await Engine.findCreateFind({ where: { name } });

    return res.json(engine);
  },
};
