const omise = require("omise")({
  publicKey: process.env.OMISE_PUBLIC_KEY,
  secretKey: process.env.OMISE_SECRET_KEY
});

exports.buySubscription = async (req, res, next) => {
  try {
    const { email, firstName, lastName } = req.user;
    const { amount, token } = req.body;
    const customer = await omise.customers.create({
      email,
      description: firstName + " " + lastName,
      card: token
    });

    const charge = await omise.charges.create({
      amount: amount * 100,
      currency: "thb",
      customer: customer.id
    });

    req.body.transactionId = charge.transaction;

    next();
  } catch (err) {
    next(err);
  }
};
