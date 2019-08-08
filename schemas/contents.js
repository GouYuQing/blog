var mongoose = require('mongoose');

//内容的表结构

module.exports = new mongoose.Schema({
    //内容关联id
 category:{
     type:mongoose.Schema.Types.ObjectId,
     //引用
     ref:'Content'
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