var mongoose = require('mongoose');

//内容的表结构

module.exports = new mongoose.Schema({
    //内容关联id
 category:{
     //类型
     type:mongoose.Schema.Types.ObjectId,
     //引用，当我们使用的时候关联上Category
     ref:'Category'
 },
 //标题
 title:String,
 //简介
 discription:{
     type:String,
     default:''
 },
 //内容
 content:{
     type:String,
     default:''
 }
})