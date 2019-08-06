/*入口文件 */

var express = require('express');
var swig = require('swig');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
//引入cookies保存登录状态
var Cookies = require('cookies')
//创建APP应用
var app = express();

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
})

app.use('/admin',require('./routers/admin'));
app.use('/api',require('./routers/api'));
app.use('/',require('./routers/main'));

mongoose.connect('mongodb://localhost:27017/blog',{ useNewUrlParser: true },function(err){
    if(err){
        console.log('数据库连接失败')
    }else{
        console.log('数据库连接成功')
    }
})
//监听
app.listen(3001,function(){
    console.log('running...')
});
