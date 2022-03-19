const userService = require('../service/userService');

const SaveUserDetail = (req,res)=>{

    const User ={
        name: req.body.name, 
        email: req.body.email, 
        password: req.body.password,
    }

    userService.SaveUserDetail(User,function (err,arg){
        if(err){
            res.status(409).send("E11000 duplicate key error collection");
        }else{
            res.status(200).send(arg);
        }
    })
}

module.exports = {
    SaveUserDetail
}
