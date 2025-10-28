/*
 * @Description: 
 * @Author: Viga
 * @Date: 2025-09-17 14:22:34
 * @LastEditTime: 2025-10-24 13:51:03
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
        },
        {
            path: '/home',
            redirect: '/'
        },
        {
            path: '/m/home', 
            name: 'mHome',
            component: () => import('@/views/HomeMPage.vue')
        },
        {
            path: '/m/healthy',
            name: 'mHealthy',
            component: () => import('@/views/HealthyMPage.vue')
        },
        {
            path: '/m/ourstory',
            name: 'mOurstory',
            component: () => import('@/views/OurstoryMPage.vue')
        },
        {
            path: '/m/support',
            name: 'mSupport',
            component: () => import('@/views/SupportMPage.vue')
        },
        {
            path: '/m/products',
            name: 'mProducts',
            component: () => import('@/views/ProductsMPage.vue')
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
            path: '/m/productDetail',
            name: 'mProductDetail',
            component: () => import('@/views/ProductMDetail.vue')
        },
        {
            path: '/support',
            name: 'Support',
            component: () => import('@/views/SupportPage.vue')
        },
    ],
    // 👇 关键：添加 scrollBehavior
    scrollBehavior (to, from, savedPosition) {
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