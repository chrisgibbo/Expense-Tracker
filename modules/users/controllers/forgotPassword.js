const forgotPassword = (req, res) => {
  res.status(200).json({
    status: "Forgot Password",
  });
};

module.exports = forgotPassword;
