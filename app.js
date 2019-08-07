/*入口文件 */

var express = require('express');
var swig = require('swig');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
//引入cookies保存登录状态
var Cookies = require('cookies');
//创建APP应用
var app = express();

var User = require('./models/User');
//设置静态文件托管
app.use('/public',express.static(__dirname+'/public'));


//定义模板引擎
app.engine('html',swig.renderFile);
//模板文件存放目录
app.set('views','./views');
app.set('view engine','html')
//取消缓存
swig.setDefaults({cache:false})
//相关设置
app.use(bodyParser.urlencoded({extended:true}))
app.use(function(req,res,next){
    req.cookies = new Cookies(req,res);
    console.log(req.cookies.get('userInfo'));
    
    //解析登录用户的cookies信息
    req.userInfo={};
    if(req.cookies.get('userInfo')){
        try{
            req.userInfo = JSON.parse(req.cookies.get('userInfo'));
            //获取当前用户的信息是不是管理员
            User.findById(req.userInfo._id).then(function(userInfo){
                if(req.userInfo.username=='admin'){
                    req.userInfo.isAdmin = true;
                    console.log(req.userInfo)
                }else{
                    req.userInfo.isAdmin = Boolean(userInfo.isAdmin);
                }
                next();
            })
        }catch(e){
            next();
        }

    }else{
        next();
    }
})

app.use('/admin',require('./routers/admin'));
app.use('/api',require('./routers/api'));
app.use('/',require('./routers/main'));

mongoose.connect('mongodb://localhost:27017/blog',{ useNewUrlParser: true },function(err){
    if(err){
        console.log('数据库连接失败')
    }else{
        console.log('数据库连接成功');
        app.listen(3001,function(){
            console.log('running')
        });
    }
})
//监听
// app.listen(5000,function(){
//     console.log('running...')
// });
