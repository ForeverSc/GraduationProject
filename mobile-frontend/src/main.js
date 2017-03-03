// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import MintUI from  'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'
import store from './store'
import VueSocketio from 'vue-socket.io';

Vue.use(VueRouter)
Vue.use(MintUI)
// Vue.use(VueSocketio, 'http://localhost:3000');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
