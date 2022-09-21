const ServerError = require('../utilities/serverError');

module.exports = (req, res, next) => {
  try {
    throw new ServerError(404, 'Path is not found on this server');
  } catch (err) {
    next(err);
  }
};
