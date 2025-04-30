const userModel = require("../models/user.model");

module.exports.createUser=async({email,firstname,lastname,password,phone})=>{
    if(!email || !firstname || !password || !phone){ throw new Error("Missing fields");
    }
    const user =userModel.create({
        firstname,
        lastname,
        email,
        phone,
        password
    })
    return user;
}