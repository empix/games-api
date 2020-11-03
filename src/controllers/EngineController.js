const Engine = require('../models/Engine');

module.exports = {
  async index(req, res) {
    const engines = await Engine.findAll();

    return res.json(engines);
  },

  async store(req, res) {
    const { name } = req.body;

    const engine = await Engine.create({ name });

    return res.json(engine);
  },
};
