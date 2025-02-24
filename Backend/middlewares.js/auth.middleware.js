const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const blackListTokenModel = require("../models/blackListToken.model");
const captainModel=require('../models/captain.model');

module.exports.authUser = async (req, res, next) => {
    // Extract token from either cookies or the Authorization header
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

    // If no token is found, return an unauthorized response
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    const isBlackListed = await blackListTokenModel.findOne({ token: token });
    if (isBlackListed) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        // Verify the token using the JWT secret key
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Find the user associated with the decoded _id from the token payload
        const user = await userModel.findById(decoded._id);

        // Attach the user object to the request so the next middleware or route handler can access it
        req.user = user;

        // Proceed to the next middleware or route handler
        return next();
    } catch (err) {
        // If token verification fails (expired, invalid, or tampered), return an unauthorized response
        return res.status(401).json({ message: "Unauthorized" });
    }
};

module.exports.authCaptain = async (req, res, next) => {
    try {
        const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

        if (!token) {
            return res.status(401).json({ message: "Unauthorized - No token provided" });
        }

        // Check if token is blacklisted
        const isBlackListed = await blackListTokenModel.findOne({ token });
        if (isBlackListed) {
            return res.status(401).json({ message: "Unauthorized - Token is blacklisted" });
        }

        // Verify JWT token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Find captain
        const captain = await captainModel.findById(decoded._id);
        if (!captain) {
            return res.status(401).json({ message: "Unauthorized - Captain not found" });
        }

        req.captain = captain; // Attach captain to request object
        next(); // Proceed to next middleware

    } catch (err) {
        return res.status(401).json({ message: "Unauthorized - Invalid token" });
    }
};
