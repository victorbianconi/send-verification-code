import sendVerificationCode from "./sendVerificationCode";

const signUp = async (req, res) => { 
  const client = await clientPromise;
  const db = client.db("mydatabase");
  
  const { username, password, email } = req.body;
  
  // the rest of the logic (sanitizing, validating the inputs, hashing the password, etc.)
  
  const user = db.users.insertOne({...})
  
  const verificationCode = Math.floor(100000 + Math.random() * 900000);
  await sendVerificationCode({ username, email, code: verificationCode });
  
  // example, store the code in the user document so you can later check if it's indeed correct
  user.verification_code = verificationCode; 
  await user.save();

 // return an access token to the user so he can submit the verification code with it (protected API route) 
};

export default signUp;
