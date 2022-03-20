// const dbConn = require("../models");
// const User = db.user;
// checkDuplicateEmail = (req, res, next) => {
//     // Email
//     User.findOne({
//       where: {
//         email_user: req.body.email_user
//       }
//     }).then(user => {
//       if (user) {
//         res.status(400).send({
//           message: "Failed! Email is already in use!"
//         });
//         return;
//       }
//       next();
//     });
  
// };

// const verifySignUp = {
//   checkDuplicateEmail: checkDuplicateEmail,
// };
// module.exports = verifySignUp