import Vue from 'vue'
import App from './App'
import routes from './router/router'
import Router from 'vue-router'
import store from './store'
import { routerMode } from './config/env'

Vue.use(Router)
const router = new Router({
  routes,
  mode: routerMode,
	strict: process.env.NODE_ENV !== 'production'
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})