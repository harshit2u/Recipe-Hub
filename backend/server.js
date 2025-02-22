const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authController');
const recipeRoutes = require('./routes/recipeController');
const { protect } = require('./middleware/authMiddleware'); // Middleware to protect routes

dotenv.config();
connectDB();

const app = express();

// Middleware to parse JSON data
app.use(express.json());  // This line is required to handle JSON request bodies

// Enable CORS with specific configuration
app.use(cors({
    origin: 'http://localhost:3000',  // Allow only your frontend to make requests
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,  // If you need to send cookies or authentication headers
}));

// Use the routes
app.use('/api/auth', authRoutes); // Ensure that authRoutes is properly imported
app.use('/api/recipes', protect, recipeRoutes); // Ensure that recipeRoutes is properly imported and protected

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
