const captainModel = require('../models/captain.model');

module.exports.createCaptain=async({firstname,lastname,email,password,color,plateNumber,capacity,vehicleType})=>{
    if(!firstname || !lastname || !email || !password || !color || !plateNumber || !capacity || !vehicleType){
        throw new Error('All fields are required');
    }

    const captain=await captainModel.create({
        firstname,
        lastname,
        email,
        password,
        vehicle:{
            color,
            plateNumber,
            capacity,
            vehicleType
        }
    });
    return captain;
}



