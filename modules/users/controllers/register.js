const register = (req, res) => {
  res.status(200).json({
    status: "Hello from the server",
  });
};

module.exports = register;
