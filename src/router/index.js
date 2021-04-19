import Vue from 'vue'
import VueRouter from 'vue-router';
const Home = () => import ('views/Home/Home.vue')
const Category = () =>  import ('views/Category/Category.vue')
const Shopcart = () =>  import('views/Shopcart/Shopcart.vue')
const Profile = () => import('views/Profile/Profile.vue')

// 1 安装插件
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  
  },
  {
    path: '/shopcart',
    component: Shopcart
  },
  {
    path: '/profile',
    component: Profile

  },
]

//2 创建路由对象

const router = new VueRouter({
  routes,
  mode: 'history'
})

//3 导出
export default router