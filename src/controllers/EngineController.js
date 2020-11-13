const Engine = require('../models/Engine');
const pagination = require('../utils/pagination');

module.exports = {
  async index(req, res) {
    const { limit, offset, error } = pagination(req.query);

    if (error) {
      return res.status(400).json({ error });
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
