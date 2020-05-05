import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Welcome from '../components/welcome.vue'
import AddArticle from '../components/Addarticle.vue'
import EditArticle from '../components/Editarticle.vue'
import DeleteArticle from ''
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
      {path:'/editarticles',component:EditArticle},
      {path:'/deletearticles',component:DeleteArticle}
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
