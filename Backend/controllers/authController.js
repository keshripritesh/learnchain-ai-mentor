import User from "./models/User.js"; // correct relative path

export async function loginWithWallet(req, res) {
  const { walletAddress, signedMessage } = req.body;

  if (!walletAddress || !signedMessage) {
    return res.status(400).json({ message: "Missing credentials" });
  }

  let user = await User.findOne({ walletAddress });

  if (!user) {
    user = await User.create({ walletAddress, signedMessage });
  } else {
    user.signedMessage = signedMessage;
    await user.save();
  }

  res.json({ success: true, user });
}
