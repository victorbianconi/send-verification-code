import { ObjectId } from "mongodb";
import clientPromise from "../../lib/mongo/index";
import authMiddleware from "../../middleware/authMiddleware";

const protectedVerification = authMiddleware(async (req, res) => {
  const client = await clientPromise;
  const db = client.db("mydatabase");

  const { code } = req.body;
  
  // validate the code etc.

  const users = await db.collection("users");
  const user = await users.findOne({
    _id: new ObjectId(req.user.userId),
  });

  if (!user) {
    res.status(404).json({ message: "user not found" });
    return;
  }

  if (Number(user.verification_code) !== Number(code)) {
    res.status(403).json({ message: "Invalid code" });
    return;
  }

  await users.updateOne(
    {
      _id: new ObjectId(req.user.userId),
    },
    { $set: { expiration_date: null, verification_code: null } }
  );

  res.json(user);
});

export default protectedVerification;
