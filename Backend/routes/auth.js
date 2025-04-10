const express = require("express");
const router = express.Router();
const { loginWithWallet } = require("../controllers/authController");

router.post("/login", loginWithWallet);

module.exports = router;
