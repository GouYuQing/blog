<template>
  <div class="left-nav">
    <img src="./logo.jpg" alt />
    <router-link to="/register" id="top">
      <i class="icon iconfont icon-demo-"></i>
      Back
    </router-link>
    <router-link to="/about" id="top">
      <i class="icon iconfont icon-guanyuwomen"></i>
      关于我
    </router-link>
    <router-link to="/article" id="top">
      <i class="icon iconfont icon-qita"></i>
      杂谈
    </router-link>
    <router-link to="/blog" id="top">
      <i class="icon iconfont icon-blog"></i>
      blog
    </router-link>
    <router-link to="/" id="top">
      <i class="icon iconfont icon-shouye"></i>
      首页
    </router-link>
  </div>
</template>
<script>
</script>
<style>
.left-nav {
  /* width: 100%;
  height: 80px; */
  background-color: rgb(45, 45, 45);
}
.left-nav img {
  width: 80px;
  height: 80px;
  float: left;
  margin-left: 111px;
}
.left-nav #top {
  width: 110px;
  height: 80px;
  line-height: 80px;
  color: #cccccc;
  float: right;
  margin-right: 20px;
  text-align: center;
  text-decoration: none;
  font-family: FZShuTi;
  font-size: 20px;
}
.left-nav .icon {
  font-size: 24px;
}
</style>