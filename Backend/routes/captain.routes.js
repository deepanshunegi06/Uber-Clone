const captainController=require('../controllers/captain.controller');
const express=require('express');
const router=express.Router();
const {body}=require('express-validator');
const authMiddleware=require('../middlewares.js/auth.middleware');

router.post('/register',[
    body('firstname').isLength({min:3}).withMessage('First name must be at least 3 characters long'),
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long'),
    body('vehicle.color').isLength({min:3}).withMessage('Color must be at least 3 characters long'),
    body('vehicle.plateNumber').isLength({min:3}).withMessage('Plate number must be at least 3 characters long'),
    body('vehicle.capacity').isInt({min:1}).withMessage('Capacity must be at least 1 person'),
    body('vehicle.vehicleType').isIn(['car','motorcycle','auto-rickshaw']).withMessage('Invalid vehicle type')
],captainController.registerCaptain); 

router.post('/login',[
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long')
],captainController.loginCaptain);

router.get('/profile',authMiddleware.authCaptain,captainController.getCaptainProfile);
module.exports= router;
router.get('/logout',authMiddleware.authCaptain,captainController.logoutCaptain);