const express = require('express');
const mongoose = require('mongoose');
const superheroesRouter = require('./controllers/superheroesController');
const timersRouter = require('./controllers/timersController');

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/superheroesDB')
    .then(() => console.log('Connected to MongoDB database'))
    .catch(err => console.error('MongoDB connection error:', err.message));

// Middleware to parse JSON requests
app.use(express.json());

// Routes
app.use('/superheroes', superheroesRouter);
app.use('/timers', timersRouter);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
