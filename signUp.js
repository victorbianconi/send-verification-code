import sendVerificationCode from "./sendVerificationCode";

const signUp = async (req, res) => { 
  const { username, password, email } = req.body;
  
 // the rest of the logic (sanitizing, validating the inputs and creating the user DB document)
  
  const verificationCode = Math.floor(100000 + Math.random() * 900000);
  await sendVerificationCode({ username, email, code: verificationCode });

 // return an access token to the user so he can submit the verification code with it (protected API route) 
};

export default signUp;
