import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/page/Home'
import About from '@/components/page/About'
import Article from '@/components/page/Article'
import Blog from '@/components/page/Blog'
import Register from '@/components/page/Register'
import View from '@/components/page/View'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path:'/about',
      name:'About',
      component:About
    },{
      path:'/article',
      name:'Article',
      component:Article
    },{
      path:'/blog',
      name:'Blog',
      component:Blog,
    },{
      path:'/register',
      name:'Register',
      component:Register
    },{
      path:'view',
      name:'View',
      component:View
    }
   
  ]
})
