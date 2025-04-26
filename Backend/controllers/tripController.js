exports.createTrip = async (req, res) => {
    try {
      // Ensure user is authenticated and available
      if (!req.user || !req.user.id) {
        return res.status(401).json({ message: 'Not authorized' });
      }
  
      const tripData = {
        ...req.body,
        createdBy: req.user.id // Remove optional chaining
      };
      
      const trip = await Trip.create(tripData);
      res.status(201).json(trip);
    } catch (error) {
      res.status(400).json({ 
        message: error.message,
        // For debugging:
        user: req.user,
        body: req.body
      });
    }
  };

// Get all trips (with pagination)
exports.getTrips = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const trips = await Trip.find({ createdBy: req.user.id })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Trip.countDocuments({ createdBy: req.user.id });

    res.json({
      trips,
      total,
      page,
      pages: Math.ceil(total / limit)
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single trip
exports.getTrip = async (req, res) => {
  try {
    const trip = await Trip.findOne({ 
      _id: req.params.id, 
      createdBy: req.user.id 
    });
    
    if (!trip) {
      return res.status(404).json({ message: 'Trip not found' });
    }
    
    res.json(trip);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update trip status
exports.updateTripStatus = async (req, res) => {
  try {
    const { status } = req.body;
    
    const trip = await Trip.findOneAndUpdate(
      { _id: req.params.id, createdBy: req.user.id },
      { status },
      { new: true }
    );
    
    if (!trip) {
      return res.status(404).json({ message: 'Trip not found' });
    }
    
    res.json(trip);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete trip
exports.deleteTrip = async (req, res) => {
  try {
    const trip = await Trip.findOneAndDelete({ 
      _id: req.params.id, 
      createdBy: req.user.id 
    });
    
    if (!trip) {
      return res.status(404).json({ message: 'Trip not found' });
    }
    
    res.json({ message: 'Trip deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add crew member to trip
exports.addCrewMember = async (req, res) => {
  try {
    const trip = await Trip.findOneAndUpdate(
      { _id: req.params.id, createdBy: req.user.id },
      { $push: { crewMembers: req.body } },
      { new: true }
    );
    
    if (!trip) {
      return res.status(404).json({ message: 'Trip not found' });
    }
    
    res.json(trip);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Add expense to trip
exports.addExpense = async (req, res) => {
  try {
    const trip = await Trip.findOneAndUpdate(
      { _id: req.params.id, createdBy: req.user.id },
      { $push: { expenses: req.body } },
      { new: true }
    );
    
    if (!trip) {
      return res.status(404).json({ message: 'Trip not found' });
    }
    
    res.json(trip);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};