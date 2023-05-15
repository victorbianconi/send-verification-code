const nodemailer = require("nodemailer");

const tranporter = async () => {
  return new Promise((resolve) => {
    const transp = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: 465,
      secure: true, 
      auth: {
        user: process.env.EMAIL_SUPPORT,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    resolve(transp);
  });
};

export default tranporter;
