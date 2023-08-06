const jsonwebtoken = require("jsonwebtoken");

const auth = (req, res, next) => {
  //   console.log(req.headers);

  const accessToken = req.headers.authorization.replace("Bearer ", "");

  try {
    const jwt_payload = jsonwebtoken.verify(accessToken, process.env.jwt_salt);
  } catch (e) {
    res.status(401).json({
      status: "failed",
      message: "Unauthorized",
    });
  }
  console.log(jwt_payload);

  next();
};

module.exports = auth;
