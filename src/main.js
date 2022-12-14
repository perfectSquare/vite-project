import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import './main.css'
import App from './App.vue'
import Home from '/src/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  
  {
    path: '/test/:name',
    name: 'test',
    component: () => import('/src/components/Test.vue')
  }

 ]

const router = createRouter({
  history: createWebHistory(),
  routes,  
})

const app = createApp(App)
app.use(router)
app.mount('#app')
