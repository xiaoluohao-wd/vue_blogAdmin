import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Welcome from '../components/welcome.vue'
import AddArticle from '../components/article/Addarticle.vue'
import Articlelist from '../components/article/articlelist.vue'
import EditArticle from '../components/article/Editarticle.vue'
import AddSHuoshuo from '../components/shuoshuo/AddShuoshuo.vue'
import Shuoshuolist from '../components/shuoshuo/shuoshuolist.vue'
import EditShuoshuo from '../components/shuoshuo/EditShuoshuo.vue'
import '../assets/css/global.css'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',redirect:'/home'
  },
  {
    path:'/home',
    component:Home,
    redirect:'/welcome',
    children:[
      {path:'/welcome',component:Welcome},
      //文章相关路由
      {path:'/addarticles',component:AddArticle},
      {path:'/articlelist',component:Articlelist},
      {path:'/articleslist/edit',component:EditArticle},
      {path:'/addshuoshuo',component:AddSHuoshuo},
      {path:'/shuoshuolist',component:Shuoshuolist},
      {path:'/shuoshuolist/edit',component:EditShuoshuo}
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
