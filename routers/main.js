var express = require('express');
var router = express.Router();
var Catrgory = require('../models/Category');
router.get('/',function(req,res,next){
    //从数据库中调取分类信息展示
    Catrgory.find().then(function(categories){
        res.render('main/index',{
            userInfo:req.userInfo,
            categories:categories
        });
    });
   

});
module.exports = router;