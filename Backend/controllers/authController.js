const User = require("../models/user"); // CommonJS syntax

async function loginWithWallet(req, res) {
  const { walletAddress, signedMessage } = req.body;

  if (!walletAddress || !signedMessage) {
    return res.status(400).json({ message: "Missing credentials" });
  }

  try {
    let user = await User.findOne({ walletAddress });

    if (!user) {
      user = await User.create({ walletAddress, signedMessage });
    } else {
      user.signedMessage = signedMessage;
      await user.save();
    }

    res.json({ success: true, user });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = { loginWithWallet };
