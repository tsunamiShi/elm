import Vue from 'vue'
import App from './App'
import routes from './router/router'
import Router from 'vue-router'

Vue.use(Router)
const router = new Router({
  routes
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})