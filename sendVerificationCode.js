const nodemailer = require("nodemailer");
import createEmailTransport from "./createEmailTransport";

const sendVerificationCode = async (options) => {
  const transporter = await createEmailTransport();

  const { email, code, username } = options;

  // your HTML email. I generally use MJML to generate the HTML.
  const html = ``;

  try {
    console.log("Sending email...");
    await transporter
      .sendMail({
        from: `${process.env.SUPPORT_ALIAS} ${process.env.SUPPORT_EMAIL}`,
        to: email,
        subject: code.toString() + " is your verification code",
        text: code.toString() + " is your verification code",
        html,
      })
      .catch((err) => {
        console.error(err);
      });
  } catch (err) {
    console.log("Couldn't send email: ", err);
  }
};

export default sendVerificationCode;
