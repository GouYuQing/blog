<template>
  <div>
   <div class="section-page-header">
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <h1 class="title">Blog - Articles List</h1>
                <p class="subtitle">There are many articles here </p>
            </div>
            <div class="col-md-4">
                <ul class="breadcrumb">
                  <li><i class="icon iconfont icon-shouye"></i></li>
                    <li><i class="fa fa-fw fa-home"></i> <a href="#">Home</a></li>
                    <li>Blog</li>
                </ul>
            </div>
        </div>
    </div>
   </div>
   <div class="content">
                    <h1>标题{{title}}</h1><h5>分类{{category}}</h5>
                    <p class="colDefault">
                        作者：<span class="colInfo">作者名字</span>
                        时间：<span class="colInfo">{{addTime}}</span>
                        阅读：<span class="colInfo">{{views}}</span>
                        评论：<span class="colInfo">10</span>
                    </p>
                   <p>hello{{describe}}</p>
                    <div class="function"><router-link :to="{name:'View'}">阅读全文</router-link></div>
   </div>
<nav aria-label="bottom">
    <ul class="pager">
        <li class="previous"><a href="#" @click="goBack"><span aria-hidden="true">&larr;</span> 上一页</a></li>
        <li>一共有条数据，每页显示条数据，一共页,当前页</li>
        <li class="next"><a href="#" @click="go">下一页 <span aria-hidden="true">&rarr;</span></a></li>
    </ul>
</nav>
<router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Blog',
  data () {
    return {
      title:'',
      category:'',
      username:'',
      addTime:'',
      count:'',
      describe:'',
      page:'',
      views:''
    }
  },
  methods:{
     goBack(){
      this.$router.go(-1);
    },
    go(){
      this.$router.go(1);
    }
  },
  created:function(){
    axios.get('http://127.0.0.1:3002/adminV/getContent')
    .then(response=>{
      console.log('1');
      console.log(response.data);
      console.log(response.data.length);
      this.addTime = response.data[0].addTime;
      this.describe = response.data[0].discription;
      this.views = response.data[0].views;
      this.title = response.data[0].title;
      this.category = response.data[0].category.name;
    })
    .catch(error=>{
      alert('网络错误，访问的网页丢失了')
    })
  }
}
</script>

<style scoped>
body{
  padding: 0;
  margin: 0;
}
.section-page-header{
  width: 100%;
  height:100px;
  background: #f5f5f5;
}
.container .col-md-8{
    color: #555;
    padding: 0;
    margin-left: -100px;
}
.container .col-md-4{
  font-size: 18px;
  line-height: 80px;
  text-decoration: none;
}
.content{
  width: 100%;
  height: 200px;
  border:1px solid red;
}
.content h1{
    font-size: 24px;
    margin-left: 10px;
}
.content a{
  transition: all 0.2s ease-in-out;
    font-weight: 500;
    color: #ff5555
}
.content .function{
  width: 100%;
  height: 40px;
  background-color: #ff5555;
  border-radius: 5px;
}
.content .function a{
  font-size: 22px;
  color: #f5f5f5;
  font-family: FZShuTi;
  text-align: center;
}
</style>
