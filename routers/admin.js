var express = require('express');
var router = express.Router();
var User = require('../models/User');

router.use(function(req,res,next){
    if(!req.userInfo.isAdmin){
        res.send('只有管理员才可以进入此页面');
        return;
    }
    next();
})
/*后台管理 */
router.get('/',function(req,res,next){
    res.render('admin/index',{
        userInfo:req.userInfo
    })
})
/*用户管理 */
router.get('/user',function(req,res){
   /*限制获取的数据条数，展示的用户个数limit（number）
   skip(2):忽略前两条数据
   每页显示两条 1-2 忽略0
   3-4 忽略2
   */
    /*为了实现用户列表的展示，需要从数据库中读取所有的用户列表信息 */
    User.find().limit(3).then(function(users){
        res.render('admin/user_index',{
            userInfo:req.userInfo,
            users:users
        })
    })
})
module.exports = router;