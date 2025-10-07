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
      path: '/home',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/homeMP',
      name: 'HomeMP',
      component: () => import('@/views/HomeMPage.vue')
    },
    {
      path: '/healthyMP',
      name: 'HealthyMP',
      component: () => import('@/views/HealthyMPage.vue')
    },
    {
      path: '/',
      name: 'Coming',
      component: () => import('@/views/ComingPage.vue')
    },
    {
      path: '/healthy',
      name: 'Healthy',
      component: () => import('@/views/HealthyPage.vue')
    },
    {
      path: '/products',
      name: 'Products',
      component: () => import('@/views/ProductsPage.vue')
    },
    {
      path: '/productDetail',
      name: 'ProductDetail',
      component: () => import('@/views/ProductDetail.vue')
    },
    {
      path: '/products',
      name: 'Products',
      component: () => import('@/views/ProductsPage.vue')
    },
    
    {
      path: '/about',
      name: 'About',
      component: () => import('@/views/AboutPage.vue')
    },
  ]
})

export default router