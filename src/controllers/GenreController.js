const Genre = require('../models/Genre');

module.exports = {
  async index(req, res) {
    const genres = await Genre.findAll();

    return res.json(genres);
  },

  async store(req, res) {
    const { name } = req.body;

    const genre = await Genre.create({ name });

    return res.json(genre);
  },
};
