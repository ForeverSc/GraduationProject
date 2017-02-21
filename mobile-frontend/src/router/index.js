import VueRouter from 'vue-router'
//views
import Login from '../views/Login'
import Register from '../views/Register'
import Home from '../views/Home'
import ShopMenu from '../views/ShopMenu.vue'

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
      path: '*',
      redirect: '/login'
    }
  ]
})
