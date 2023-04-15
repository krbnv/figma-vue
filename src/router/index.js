import { createRouter, createWebHistory } from 'vue-router'
import Signup from '../components/Login/Signup.vue'
import Login from '../components/Login/Login.vue'
import HomeApp from "../components/HomeApp.vue"
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'suginup',
      component: Signup
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path:'/home',
      name:"home",
      component: HomeApp
    }
    
    
  ]
})

export default router
