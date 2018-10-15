import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

// Libraries
import AOS from 'aos'
import 'aos/dist/aos.css'

// Routes

// Assets
import "./assets/styles/headers.scss"
import "./assets/styles/fonts.scss"
import "./assets/styles/grid.scss"
import "./assets/styles/colors.scss"

Vue.config.productionTip = false

// const router = new VueRouter({
//   // ES6 routes: routes
//   routes,
// })

Vue.use(VueRouter);

new Vue({
  el: '#app',
  // router,
  created () {
    AOS.init()
  },
  render: h => h(App)
})
