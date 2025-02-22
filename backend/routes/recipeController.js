const express = require('express');
const router = express.Router(); // Use Router here
const Recipe = require('../models/Recipe');

// Create recipe route
router.post('/', async (req, res) => {
  const { title, description, ingredients, image } = req.body;
  try {
    const recipe = new Recipe({
      title,
      description,
      ingredients,
      image,
      user: req.user.id,  // Get user from JWT token
    });
    await recipe.save();
    res.status(201).json(recipe);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// You can add other CRUD operations for recipes (get, update, delete)

module.exports = router; // Export the router