const { getAllSightings } = require('./sightingController');

// Add router from express to manage routing
const router = require('express').Router();

// Handle requests
router.get('/', getAllSightings);

// Export this router module
module.exports = router;