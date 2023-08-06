const jsonwebtoken = require("jsonwebtoken");

const auth = (req, res, next) => {
  //   console.log(req.headers);

  const accessToken = req.headers.authorization.replace("Bearer ", "");

  const jwt_payload = jsonwebtoken.verify(accessToken, process.env.jwt_salt);

  console.log(jwt_payload);

  next();
};

module.exports = auth;
