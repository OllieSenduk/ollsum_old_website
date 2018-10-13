import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { routes } from './routes';

Vue.config.productionTip = false

const router = new VueRouter({
  // ES6 routes: routes
  routes,
})

Vue.use(VueRouter);

new Vue({
  el: '#app',
  router,
  created () {
    AOS.init()
  },
  render: h => h(App)
})
