// Corrected user.js
const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
  res.status(200).json([{ name: 'Alice', email: 'alice@example.com' }]);
});

module.exports = router;
