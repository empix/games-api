const Developer = require('../models/Developer');

module.exports = {
  async index(req, res) {
    const developers = await Developer.findAll();

    return res.json(developers);
  },

  async store(req, res) {
    const { name } = req.body;

    const [developer] = await Developer.findCreateFind({ where: { name } });

    return res.json(developer);
  },
};
