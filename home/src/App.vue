<template>
  <div id="app">
    <topNav class="top"></topNav>
    <transition name="fade" mode="out-in">
    <div class="main">
      <router-view></router-view>
    </div>
    </transition>
  </div>
</template>

<script>
import topNav from '@/components/common/topNav'
export default {
  name: 'App',
  components: {
    topNav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.top{
  width: 100%;
  height:80px;
  background-color: #cccccc;
}
.main{
  width: 100%;
}
.fade-enter{
  opacity: 0;
}
.fade-leave{
  opacity: 1;
}
.fade-leave-active{
  transition: opacity .5s;
}
.fade-leave-active{
  opacity: 0;
  transition: opacity .5s ;
}
</style>
