const Genre = require('../models/Genre');
const pagination = require('../utils/pagination');

module.exports = {
  async index(req, res) {
    const { limit, offset, error } = pagination(req.query);

    if (error) {
      return res.status(400).json({ error });
    }

    const genres = await Genre.findAll({ limit, offset });

    return res.json(genres);
  },

  async store(req, res) {
    const { name } = req.body;

    const [genre] = await Genre.findCreateFind({ where: { name } });

    return res.json(genre);
  },

  async delete(req, res) {
    const { id } = req.params;

    const genre = await Genre.destroy({ where: { id } });

    return res.json(genre);
  },
};
