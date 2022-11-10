const { Transaction, Subscription } = require("../models");

exports.createSubscription = async (req, res, next) => {
  try {
    const { id: userId } = req.user;
    const { tierId, amount, transactionId } = req.body;

    const transaction = await Transaction.create({
      proofId: transactionId,
      userId,
      amount
    });

    const today = new Date();
    const nextMonth = new Date();
    nextMonth.setMonth(today.getMonth() + 1);
    console.log(today.toISOString());
    console.log(nextMonth.toISOString());
    const subscription = await Subscription.create({
      startDate: today.toISOString(),
      endDate: nextMonth.toISOString(),
      userId,
      transactionId: transaction.id,
      tierId
    });

    res.status(200).json({ Subscription: subscription });
  } catch (err) {
    next(err);
  }
};
