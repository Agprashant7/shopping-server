const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  try {
    const token = req.header("authorization");
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (verified) {
      req.body.userId = verified.id;
      next();
    } else {
      // Access Denied
      console.log("Access Denied", verified);
      return res.status(401).send(error);
    }
  } catch (error) {
    // Access Denied
    console.log("Access catch", error);
    return res.status(401).send(error);
  }
};
module.exports = verifyToken;
