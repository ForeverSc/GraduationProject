import VueRouter from 'vue-router'
//views
import Login from '../views/Login'
import Register from '../views/Register'
import Home from '../views/Home'

export default new VueRouter({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
