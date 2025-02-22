const userModel = require("../models/user.model");

module.exports.createUser=async({email,firstname,lastname,password})=>{
    if(!email || !firstname || !password){ throw new Error("Missing fields");
    }
    const user =userModel.create({
        firstname,
        lastname,
        email,
        password
    })
    return user;
}