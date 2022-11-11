const express = require("express");
const cors = require("cors");
require("dotenv").config();
const morgan = require("morgan");
// const db = require('./models');
// db.sequelize.sync({ force: true });

const noPathMiddleware = require("./middlewares/noPath");
const errorMiddleware = require("./middlewares/error");
const authenticate = require("./middlewares/authenticate");
const adminAuthenticate = require("./middlewares/adminAuthenticate");
const vpassCheck = require("./middlewares/vpassCheck");
const authRoute = require("./routes/authRoute");
const animeRoute = require("./routes/animeRoute");
const manageRoute = require("./routes/manageRoute");
const paymentRoute = require("./routes/paymentRoute");
const tierRoute = require("./routes/tierRoute");
const miscRoute = require("./routes/miscRoute");
const tierStaticController = require("./controllers/tierStaticController");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/public", express.static("public"));
app.use("/forSubscription", vpassCheck, express.static("forSubscription"));

app.use("/auth", authRoute);
app.use("/animes", animeRoute);
app.use("/tiers", authenticate, tierRoute);
app.use("/misc", miscRoute);
app.use("/payment", paymentRoute);

app.use("/manage", adminAuthenticate, manageRoute);

app.use(noPathMiddleware);
app.use(errorMiddleware);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log("Server is running on port " + PORT));
