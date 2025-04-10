// Corrected server.js
const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');
const userRoutes = require('./models/user');

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
