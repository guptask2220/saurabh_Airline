// const jwt = require('jsonwebtoken');
// const User = require('../models/User');
// const ErrorResponse = require('../utils/errorResponse'); // Optional for better error handling

// exports.protect = async (req, res, next) => {
//     let token;

//     // 1. Get token from header
//     if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
//         token = req.headers.authorization.split(' ')[1];
//     }

//     // 2. Verify token exists
//     if (!token) {
//         return next(new ErrorResponse('Not authorized to access this route', 401));
//         // Or without ErrorResponse:
//         // return res.status(401).json({ success: false, error: 'Not authorized' });
//     }

//     try {
//         // 3. Verify token
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
//         // 4. Get user from token and attach to request
//         req.user = await User.findById(decoded.id).select('-password');
        
//         if (!req.user) {
//             return next(new ErrorResponse('No user found with this id', 404));
//         }
        
//         next();
//     } catch (err) {
//         return next(new ErrorResponse('Not authorized to access this route', 401));
//     }
// };

// // Role authorization middleware
// exports.authorize = (...roles) => {
//     return (req, res, next) => {
//         if (!roles.includes(req.user.role)) {
//             return next(
//                 new ErrorResponse(
//                     `User role ${req.user.role} is not authorized to access this route`,
//                     403
//                 )
//             );
//         }
//         next();
//     };
// };
// middleware/auth.jsconst jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
  try {
    console.log('[Auth Middleware] Starting authentication check');
    
    // 1. Get token from header
    const token = req.header('Authorization')?.replace('Bearer ', '');
    console.log(`[Auth Middleware] Received token: ${token ? '*****' + token.slice(-5) : 'NULL'}`);
    
    if (!token) {
      console.warn('[Auth Middleware] No token provided');
      return res.status(401).json({ 
        success: false,
        error: 'Authentication required. Please provide a valid token.' 
      });
    }

    // 2. Verify token
    console.log('[Auth Middleware] Verifying token...');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(`[Auth Middleware] Token decoded. User ID: ${decoded.id}`);
    
    // 3. Find user in database
    console.log('[Auth Middleware] Finding user in database...');
    req.user = await User.findById(decoded.id).select('-password');
    
    if (!req.user) {
      console.warn(`[Auth Middleware] User not found for ID: ${decoded.id}`);
      return res.status(401).json({ 
        success: false,
        error: 'User account not found. Please log in again.' 
      });
    }
    
    console.log(`[Auth Middleware] Authenticated as: ${req.user.email} (Role: ${req.user.role})`);
    next();
  } catch (err) {
    console.error('[Auth Middleware] Error:', err.message);
    
    let errorMessage = 'Not authorized';
    if (err.name === 'JsonWebTokenError') {
      errorMessage = 'Invalid token';
    } else if (err.name === 'TokenExpiredError') {
      errorMessage = 'Token expired';
    }
    
    res.status(401).json({ 
      success: false,
      error: errorMessage,
      systemError: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
};

const authorize = (...roles) => {
  return (req, res, next) => {
    console.log(`[Auth Middleware] Checking authorization for roles: ${roles.join(', ')}`);
    console.log(`[Auth Middleware] User role: ${req.user?.role || 'none'}`);
    
    if (!req.user) {
      console.error('[Auth Middleware] No user object found');
      return res.status(500).json({
        success: false,
        error: 'Server configuration error'
      });
    }
    
    if (!roles.includes(req.user.role)) {
      console.warn(`[Auth Middleware] Access denied for role ${req.user.role}`);
      return res.status(403).json({ 
        success: false,
        error: `You need ${roles.join(' or ')} privileges to access this resource`
      });
    }
    
    console.log('[Auth Middleware] Authorization granted');
    next();
  };
};

module.exports = {
  protect,
  authorize
};