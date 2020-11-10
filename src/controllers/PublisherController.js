const Publisher = require('../models/Publisher');

module.exports = {
  async index(req, res) {
    const publishers = await Publisher.findAll();

    return res.json(publishers);
  },

  async store(req, res) {
    const { name } = req.body;

    const [publisher] = await Publisher.findCreateFind({ where: { name } });

    return res.json(publisher);
  },
};
