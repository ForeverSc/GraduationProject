import VueRouter from 'vue-router'
//views
import Login from '../views/Login'
import Register from '../views/Register'
import Home from '../views/Home'
import ShopMenu from '../views/ShopMenu.vue'
import OrderInfo from '../views/OrderInfo.vue'

export default new VueRouter({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/shopMenu',
      component: ShopMenu
    },
    {
      path: '/orderInfo',
      component: OrderInfo
    },
    {
      path: '*',
      redirect: '/login'
    }
  ]
})
