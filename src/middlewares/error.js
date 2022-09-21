module.exports = (err, req, res, next) => {
  const { code, message } = err;
  if (
    err.name === 'SequelizeUniqueConstraintError' ||
    err.name === 'SequelizeValidationError'
  ) {
    return res.status(400).json({ message: err.errors[0].message });
  }
  if (code === 404) {
    return res.status(code).json({ message });
  }
  if (code === 400) {
    return res.status(code).json({ message });
  }
  console.log(err);
  return res.status(400).json({ message: 'non defined Error occured' });
};
