const jwt = require("jsonwebtoken");

//authentification

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET", {expiresIn : '1800s'}); //A  VERIFIER !!!!!!!
    const userId = decodedToken.userId;
    req.user = decodedToken
    if (req.body.userId && req.body.userId !== userId) {
      throw "Invalid user ID";
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      message:'Invalid Token!',
      error: new Error("Invalid request!"),
    });
  }
};