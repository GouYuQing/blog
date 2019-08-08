var express = require('express');
var router = express.Router();
var User = require('../models/User');
var Category = require('../models/Category');


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
    res.render('admin/category_index', {
        userInfo: req.userInfo
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
module.exports = router;