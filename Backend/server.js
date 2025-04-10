const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');

const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const userRoutes = require('./models/user'); // This might be incorrect as routes, see note below

dotenv.config();

// Initialize app
const app = express();

// Connect to DB
connectDB();

// Passport config
require('./config/passport')(passport);

// Middleware
app.use(express.json());
app.use(cors());
app.use(session({
  secret: 'secret', // You should ideally use a strong secret and store it in .env
  resave: false,
  saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/auth', authRoutes);


// Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
