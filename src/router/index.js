import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import '@/assets/bethany/assets/css/style.css'
import '@/assets/bethany/assets/vendor/bootstrap/css/bootstrap-grid.css'
import '@/assets/bethany/assets/vendor/bootstrap/css/bootstrap-reboot.css'
import '@/assets/bethany/assets/vendor/bootstrap/css/bootstrap.css'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
