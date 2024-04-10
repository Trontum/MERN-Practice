var express = require('express');
var router = express.Router();
const {Users}=require("./users.model");
var jwt=require("jsonwebtoken");

/* GET users listing. */
router.post('/login', function(req, res, next) {
  Users.find({username:req.body.username,password:req.body.password})
  .then((user)=>{
    if(user.length>0) {
      let secretKey="secret";
      let token=jwt.sign(user[0].username,secretKey);
      res.status(200).send({token});
    }
    //res.send({user:user})
    else res.status(400).send({status:"Invalid Username / Password"})
  })
  .catch((error)=>res.status(500).send(error))
});
router.post('/register', function(req, res, next) {
  let user=new Users({
    username:req.body.username,
    password:req.body.password,
    email:req.body.email
  })
  user.save()
  .then((user)=>res.send({status: user.email+" is registered successfully"}))
  .catch((error)=>res.status(500).send(error))

});


module.exports = router;
