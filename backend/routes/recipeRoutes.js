const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');  // Import your controller
const { protect } = require('../middleware/authMiddleware'); // Import protect middleware

// Define the route to create a recipe, with protect middleware to secure it
router.post('/create', protect, recipeController.createRecipe);  // Protect the route

// Export the router
module.exports = router;
