const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/temp');
  },
  filename: (req, file, cb) => {
    cb(
      null,
      new Date().getTime() +
        '' +
        Math.round(Math.random() * 1e8) +
        '.' +
        file.mimetype.split('/')[1]
    );
  }
});

module.exports = multer({ storage });
