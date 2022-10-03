module.exports = (err, req, res, next) => {
  const { code, message } = err;
  if (
    err.name === 'SequelizeUniqueConstraintError' ||
    err.name === 'SequelizeValidationError'
  ) {
    return res.status(400).json({ message: err.errors[0].message });
  }
  if (err.name === 'JsonWebTokenError') {
    return res.status(401).json({ message: err.message });
  }
  console.log(err);
  return res.status(code || 500).json({ message: err.message });
};
