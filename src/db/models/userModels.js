const mongoose = require('mongoose');
const UserSchema = require('../schema/userSchema').UserSchema;

const userModels = mongoose.model('users',UserSchema);
//'users' he collection name he

module.exports ={
    userModels
}