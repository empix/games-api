const Developer = require('../models/Developer');
const pagination = require('../utils/pagination');

module.exports = {
  async index(req, res) {
    const { limit, offset, error } = pagination(req.query);

    if (error) {
      return res.status(400).json({ error });
    }

    const developers = await Developer.findAll({ limit, offset });

    return res.json(developers);
  },

  async store(req, res) {
    const { name } = req.body;

    const [developer] = await Developer.findCreateFind({ where: { name } });

    return res.json(developer);
  },
};
