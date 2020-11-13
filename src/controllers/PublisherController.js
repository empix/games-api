const Publisher = require('../models/Publisher');
const pagination = require('../utils/pagination');

module.exports = {
  async index(req, res) {
    const { limit, offset, error } = pagination(req.query);

    if (error) {
      return res.status(400).json({ error });
    }

    const publishers = await Publisher.findAll({ limit, offset });

    return res.json(publishers);
  },

  async store(req, res) {
    const { name } = req.body;

    const [publisher] = await Publisher.findCreateFind({ where: { name } });

    return res.json(publisher);
  },

  async delete(req, res) {
    const { id } = req.params;

    const publisher = await Publisher.destroy({ where: { id } });

    return res.json(publisher);
  },
};
