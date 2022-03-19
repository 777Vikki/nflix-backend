const userModel = require('../db/models/userModels').userModels;

const getUserByEmail = (email, userCB) => {
    userModel.findOne({email: email}).exec(userCB);
}

const SaveUserDetail = (userdetail,cbAccessor)=>{

    const userModelSave = new userModel(userdetail)

    userModelSave.save(cbAccessor)

    //  userModel.find({email: userdetail.email}).then((userdetail1)=>{
    //     //  console.log("error",err);
    //      console.log("userdetail",userdetail1);
    //  }).catch((err)=>{
    //      console.log("error",err);
    //  })
   
}

const updateUserDetail = (filter, update, updateCB) => {
    userModel.findOneAndUpdate(filter, update, updateCB);
}

module.exports = {
    SaveUserDetail,
    getUserByEmail,
    updateUserDetail
}