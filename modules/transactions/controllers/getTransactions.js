const getTransactions = (req, res) => {
  res.status(200).json({
    status: "Transactions",
  });
};

module.exports = getTransactions;
