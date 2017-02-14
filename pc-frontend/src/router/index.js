import VueRouter from 'vue-router'
//views

export default new VueRouter({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '*',
      redirect: '/'
    }
  ]
})
