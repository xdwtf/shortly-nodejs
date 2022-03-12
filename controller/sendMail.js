const nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport({
  service: "gmail",
  port: 465,
  authentication: 'plain',
  enable_starttls_auto: true,
  auth: {
    user: process.env.GMAIL_ID,
    pass: process.env.GMAIL_PASS,
  },
});

module.exports.sendResetEmail = async (email, token) => {
   // change first part to your domain
  var url = process.env.APP_NAME + "/user/reset-password?token=" + token;

  await smtpTransport.sendMail({
    from: "<your email>",
    to: email,
    subject: "Reset Password | Lyliya",
    text: `Click on this link to reset your password ${url}`,
    html: `<h3> Click on this link to reset your password : ${url} </h3>`,
  });
};

module.exports.sendVerifyEmail = async (email, token) => {
  // change first part to your domain
  var url = process.env.APP_NAME + "/user/verifyemail?token=" + token;

  await smtpTransport.sendMail({
    from: "<your email>",
    to: email,
    subject: "Verify Account | Lyliya",
    text: `Click on this link to verify ${url}`,
    html: `<h3> Click on this link to verify your email : ${url} </h3>`,
  });
};
