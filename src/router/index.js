import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import '../assets/css/global.css'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',redirect:'/home'
  },
  {path:'/home',component:Home}
]

const router = new VueRouter({
  routes
})

export default router
