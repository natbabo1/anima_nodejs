const express = require('express');
const cors = require('cors');
require('dotenv').config();
// const db = require('./models');
// db.sequelize.sync({ force: true });

const noPathMiddleware = require('./middlewares/noPath');
const errorMiddleware = require('./middlewares/error');
const authRoute = require('./routes/authRoute');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/auth', authRoute);

app.use(noPathMiddleware);
app.use(errorMiddleware);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log('Server is running on port ' + PORT));
