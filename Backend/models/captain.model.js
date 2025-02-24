const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const captainSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        minlength: [3, 'First name must be at least 3 characters long']
    },
    lastname: {
        type: String,
        required: true,
        minlength: [3, 'Last name must be at least 3 characters long']
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    socketId: {
        type: String,

    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },
    vehicle: {
        color: {
            type: String,
            required: true,
            minlength: [3, 'Color must be at least 3 characters long']
        },
        plateNumber: {
            type: String,
            required: true,
            minlength: [3, 'Plate number must be at least 3 characters long']
        },
        capacity: {
            type: Number,
            required: true,
            min: [1, 'Capacity must be at least 1 person']
        },
        vehicleType: {
            type: String,
            required: true,
            enum: ['car', 'motorcycle', 'auto-rickshaw']
        }

    },
    location: {
        lat: {
            type: Number,

        },
        lng: {
            type: Number,
            
        }
    }
})

captainSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
}
captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}
captainSchema.statics.hashPassword = async function (password) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}
const captainModel = mongoose.model('Captain', captainSchema);

module.exports = captainModel;