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
      path: '/story',
      name: 'Story',
      component: () => import('@/views/OurstoryPage.vue')
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
      path: '/about',
      name: 'About',
      component: () => import('@/views/AboutPage.vue')
    },
  ],
  // 👇 关键：添加 scrollBehavior
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // 如果使用浏览器前进/后退按钮，保留上次滚动位置
      return savedPosition
    } else {
      // 否则页面跳转时滚动到顶部
      return { top: 0, left: 0 }
    }
  }
})

export default router