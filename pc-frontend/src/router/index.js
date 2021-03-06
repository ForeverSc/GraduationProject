import VueRouter from 'vue-router'
//views
import Login from '../views/Login'
import Register from '../views/Register'
import Home from '../views/Home'
import ShopInfo from '../views/ShopInfo'
import Menu from '../views/Menu'
import Orders from '../views/Orders'
import historyOrders from '../views/historyOrders'

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
      path: '/orders',
      component: Orders
    },
    {
      path: '/historyOrders',
      component: historyOrders
    },
    {
      path: '*',
      redirect: '/login'
    }
  ]
})
