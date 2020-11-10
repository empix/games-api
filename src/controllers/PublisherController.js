const Publisher = require('../models/Publisher');

module.exports = {
  async store(req, res) {
    const { name } = req.body;

    const [publisher] = await Publisher.findCreateFind({ where: { name } });

    return res.json(publisher);
  },
};
