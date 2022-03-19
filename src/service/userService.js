const UserAccessor = require('../accessor/userAccessor');

const SaveUserDetail = (userdetail,cb)=>{
  // console.log("usrdetail",userdetail);

  if(userdetail.name && userdetail.password && userdetail.email){
       UserAccessor.SaveUserDetail(userdetail,function(errSER,argSER){
         (errSER)?cb(errSER):cb(undefined,argSER);
       })
  }else{
      console.log('errror');
      cb("error");
  }   

}

module.exports = {
    SaveUserDetail
}