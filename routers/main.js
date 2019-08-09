var express = require('express');
var router = express.Router();
var Catrgory = require('../models/Category');
var Content = require('../models/Content');
router.get('/',function(req,res,next){
    var data ={
        userInfo:req.userInfo,
        categories:[],
         page : Number(req.query.page || 1),
         limit : 3,
         pages : 0,
         count:0
    }
   
    //从数据库中调取分类信息展示
    Catrgory.find().then(function(categories){
      data.categories = categories;
      return Content.count();
    }).then(function(){
        data.count = count;
         /*计算总页数 */
         data.pages = Math.ceil(data.count / data.limit);
         /**取值范围不能大于pages，不能小于1 */
         data.page = Math.min(data.page, data.pages);
         data.page = Math.max(data.page, 1);
         var skip = (data.page - 1) * data.limit;
         return  Content.find().limit(data.limit).skip(skip).populate(['category','user'])
    }).then(function(contents){
        data.contents = contents;
        // console.log(data);
        res.render('main/index',data);
    })
   

});
module.exports = router;