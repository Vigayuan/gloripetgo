/*
 * @Description: 
 * @Author: Viga
 * @Date: 2025-09-17 14:22:34
 * @LastEditTime: 2025-09-17 14:23:01
 */
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    }
  ]
})

export default router