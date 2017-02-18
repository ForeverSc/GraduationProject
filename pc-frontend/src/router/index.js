import VueRouter from 'vue-router'
//views
import Login from '../views/Login'
import Register from '../views/Register'
import Home from '../views/Home'
import ShopInfo from '../views/ShopInfo'
import Menu from '../views/Menu'
import EditDish from '../views/EditDish'

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
      path: '/shopInfo',
      component: ShopInfo
    },
    {
      path: '/menu',
      component: Menu
    },
    {
      path: '/editDish',
      component: EditDish
    },
    {
      path: '*',
      redirect: '/login'
    }
  ]
})
