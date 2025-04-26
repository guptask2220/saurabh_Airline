const express = require('express');
const router = express.Router();
const tripController = require('../controllers/tripController');
// const auth = require('../middleware/auth');

// Protected routes (require authentication)
// router.use(auth);

router.post('/', tripController.createTrip);
router.get('/', tripController.getTrips);
router.get('/:id', tripController.getTrip);
router.patch('/:id/status', tripController.updateTripStatus);
router.delete('/:id', tripController.deleteTrip);
router.post('/:id/crew', tripController.addCrewMember);
router.post('/:id/expenses', tripController.addExpense);

module.exports = router;
