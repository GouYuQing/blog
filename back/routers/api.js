var express = require('express');
var router = express.Router();
var User = require('../models/User')


var responseData;
router.use(function(req,res,next){
 responseData ={
     code:0,
     message:''
 }
 next();
})
/* *注册 密码用户名不能为空 两次输入密码必须一致
    在数据库中验证是否已经被注册
*/
router.post('/user/register',function(req,res,next){
    // console.log(req.body);
    var username = req.body.username;
    var password = req.body.password;
    var repassword = req.body.repassword;
    // 判空
    if(username == ''){
        responseData.code = 1;
        responseData.message ='用户名不能为空';
        res.json(responseData);
        return ;
    }
    if(password == ''){
        responseData.code = 2;
        responseData.message ='密码不能为空'
        res.json(responseData);
        return ;
    }
    if(password != repassword){
        responseData.code = 3;
        responseData.message ='两次输入的密码不一致'
        res.json(responseData);
        return ;
    }
    //判断是否已经被注册
     User.findOne({
         username:username
     }).then(function(userInfo){
        if(userInfo){
            responseData.code=4;
            responseData.message='该用户已存在';
            res.json(responseData);
            return ;
        }
//保存信息到数据库中
        var user = new User({
            username:username,
            password:password

        });
        return user.save();
     }).then(function(newUserInfo){
        responseData.message ='注册成功';
        res.json(responseData);
        return ;
     });
  
})
/*登录 */
router.post('/user/login',function(req,res,next){
    var username = req.body.username;
    var password = req.body.password;
    if(username==''||password==''){
        responseData.code = 1;
        responseData.message = '用户名和密码不能为空';
        res.json(responseData);
        return ;
    }
    //相同的用户名和密码存在登陆成功
    User.findOne({
        username:username,
        password:password
    }).then(function(userInfo){
        if(!userInfo){
            responseData.code = 2;
            responseData.message = '用户名或者密码错误';
            res.json(responseData);
            return ;
        }
        //成功之后
        responseData.message='登录成功';
        responseData.userInfo={
            _id:userInfo._id,
            username:userInfo.username
        }
        //发送cookies信息
        req.cookies.set('userInfo',JSON.stringify({
            _id:userInfo._id,
            username:userInfo.username
        }));
        res.json(responseData);
        return ;
    })
})
router.get('/user/logout',function(req,res){
    req.cookies.set('userInfo',null);
    res.json(responseData);
    return ;
})
module.exports = router;