module.exports = ({ page, limit }) => {
  page = parseInt(page) || 1;
  limit = parseInt(limit) || 10;
  const offset = limit * (page - 1);

  if (limit > 20 || limit < 1) {
    return { error: 'The limit must be between 1 and 20' };
  }

  if (page < 1) {
    return { error: 'The page must be greater than 0' };
  }

  return { limit, offset };
};
