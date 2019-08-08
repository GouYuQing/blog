var express = require('express');
var router = express.Router();
var User = require('../models/User');
var Category = require('../models/Category');
var Content = require('../models/Content');

router.use(function (req, res, next) {
    if (!req.userInfo.isAdmin) {
        res.send('只有管理员才可以进入此页面');
        return;
    }
    next();
})
/*后台管理 */
router.get('/', function (req, res, next) {
    res.render('admin/index', {
        userInfo: req.userInfo
    })
})
/*用户管理 */
router.get('/user', function (req, res) {
    /*限制获取的数据条数，展示的用户个数limit（number）
    skip(2):忽略前两条数据
    每页显示两条 1-2 忽略0
    3-4 忽略2
    */
    /*为了实现用户列表的展示，需要从数据库中读取所有的用户列表信息 */
    var page = Number(req.query.page || 1);
    var limit = 3;
    var pages = 0;
    /**读取数据库中的总数据 */
    User.count().then(function (count) {
        // console.log(count);
        /*计算总页数 */
        pages = Math.ceil(count / limit);
        /**取值范围不能大于pages，不能小于1 */
        page = Math.min(page, pages);
        page = Math.max(page, 1);
        var skip = (page - 1) * limit;

        User.find().limit(limit).skip(skip).then(function (users) {
            res.render('admin/user_index', {
                userInfo: req.userInfo,
                users: users,
                page: page,
                count:count,
                limit:limit,
                pages:pages
            })
        })
    })

})
/*分类管理 */
router.get('/category',function(req,res){
    var page = Number(req.query.page || 1);
    var limit = 3;
    var pages = 0;
    /**读取数据库中的总数据 */
    Category.count().then(function (count) {
        // console.log(count);
        /*计算总页数 */
        pages = Math.ceil(count / limit);
        /**取值范围不能大于pages，不能小于1 */
        page = Math.min(page, pages);
        page = Math.max(page, 1);
        var skip = (page - 1) * limit;
/*
升序：1
降序：-1
*/
    Category.find().sort({_id:-1}).limit(limit).skip(skip).then(function (categories) {
            res.render('admin/category_index', {
                userInfo: req.userInfo,
                categories: categories,
                page: page,
                count:count,
                limit:limit,
                pages:pages
            })
        })
    })
})
/*添加分类 */
router.get('/category/add',function(req,res){
    res.render('admin/category_add', {
        userInfo: req.userInfo
    })
})
/*分类的保存 */
router.post('/category/add',function(req,res){
   var name = req.body.name||' ';
   if(name ==' '){
       res.render('admin/error',{
        userInfo: req.userInfo,
        message:'名称不能为空'
       });
       return;
   }
   //验证数据库中是否有相同的分类名称
   Category.findOne({
       name:name
   }).then(function(rs){
       if(rs){
        res.render('admin/error',{
            userInfo: req.userInfo,
            message:'分类信息已经存在'
           })
           return Promise.reject();
       }else{
           //不存在，保存
           return new Category({
               name:name
           }).save();
       }
   }).then(function(newCategory){
    res.render('admin/success',{
        userInfo: req.userInfo,
        message:'分类保存成功',
        url:'/admin/category'
       });
   })
})
/*分类修改 */
router.get('/category/edit',function(req,res){
    var id = req.query.id||' ';
    Category.findOne({
        _id:id
    }).then(function(category){
        if(!category){
            res.render('admin/error',{
                userInfo:req.userInfo,
                message:'此信息不存在'
            });
        }else{
            //存在及保存
            res.render('admin/category_edit',{
                userInfo:req.userInfo,
                category:category
            })
        }
    })
})
/*分类修改保存*/
router.post('/category/edit',function(req,res){
    var id = req.query.id||' ';
    var name = req.body.name||' ';
    Category.findOne({
        _id:id
    }).then(function(category){
        if(!category){
            res.render('admin/error',{
                userInfo:req.userInfo,
                message:'此信息不存在'
            });
            return Promise.reject();
        }else{
            //没做任何修改提交的时候
           if(name == category.name){
               res.render('admin/success',{
                   userInfo:userInfo,
                   message:'修改信息成功',
                   url:'/admin/category'
               });
               return Promise.reject();
           }else{
            // 要修改的分类名称是否已经存在
           return Category.findOne({
                _id:{$ne:id},
                name:name
            })
           }
        }
    }).then(function(sameCategory){
        if(sameCategory){
            res.render('admin/error',{
                userInfo:req.userInfo,
                message:'数据库中已经存在相同分类'
            })
            return Promise.reject();
        }else{
           return Category.update({
                _id:id
            },{
                name:name
            });
        }
    }).then(function(){
        res.render('admin/success',{
            userInfo:userInfo,
            message:'修改信息成功',
            url:'/admin/category'
        });
    })
})
/*分类删除 */
router.get('/category/delete',function(req,res){
    var id = req.query.id||' ';
    Category.remove({
        _id:id
    }).then(function(){
        res.render('admin/success',{
            userInfo:userInfo,
            message:'修改信息成功',
            url:'/admin/category'
        });
    })
})
/*内容首页*/
router.get('/content',function(req,res){
    var page = Number(req.query.page || 1);
    var limit = 3;
    var pages = 0;
    /**读取数据库中的总数据 */
    Content.count().then(function (count) {
        // console.log(count);
        /*计算总页数 */
        pages = Math.ceil(count / limit);
        /**取值范围不能大于pages，不能小于1 */
        page = Math.min(page, pages);
        page = Math.max(page, 1);
        var skip = (page - 1) * limit;
    Content.find().sort({_id:-1}).limit(limit).skip(skip).then(function (contents) {
            res.render('admin/content_index', {
                userInfo: req.userInfo,
                contents: contents,
                page: page,
                count:count,
                limit:limit,
                pages:pages
            })
        })
    })
})
/*内容添加页面*/
router.get('/content/add',function(req,res){
    Category.find().sort({_id:-1}).then(function(categories){
        res.render('admin/content_add',{
            userInfo:req.userInfo,
            categories:categories
        })
    })
    
})
/*内容保存 */
router.post('/content/add',function(req,res){
    if(req.body.category == ''){
        res.render('admin/error',{
            userInfo:req.userInfo,
            message:'内容分类不能为空'
        })
        return;
    }
    if(req.body.title == ''){
        res.render('admin/error',{
            userInfo:req.userInfo,
            message:'内容标题不能为空'
        })
        return;
    }
    /*保存数据到数据库 */
    new Content({
        category:req.body.category,
        title:req.body.title,
        discription:req.body.discription,
        content:req.body.content
    }).save().then(function(rs){
        res.render('admin/success',{
            userInfo:req.userInfo,
            message:'内容保存成功',
            url:'/admin/content'
        })
    })
})
module.exports = router;