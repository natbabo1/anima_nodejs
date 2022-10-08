const express = require('express');
const cors = require('cors');
require('dotenv').config();
const morgan = require('morgan');
// const db = require('./models');
// db.sequelize.sync({ force: true });

const noPathMiddleware = require('./middlewares/noPath');
const errorMiddleware = require('./middlewares/error');
const authenticate = require('./middlewares/authenticate');
const authRoute = require('./routes/authRoute');
const animeRoute = require('./routes/animeRoute');
const miscRoute = require('./routes/miscRoute');

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/public', express.static('public'));
app.use('/subscriber', express.static('forSubscription'));

app.use('/auth', authRoute);
app.use('/animes', animeRoute);
app.use('/misc', miscRoute);

app.use(noPathMiddleware);
app.use(errorMiddleware);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log('Server is running on port ' + PORT));
