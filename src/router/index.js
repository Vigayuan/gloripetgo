/*
 * @Description: 
 * @Author: Viga
 * @Date: 2025-09-17 14:22:34
 * @LastEditTime: 2026-01-22 11:23:58
 */
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
// import Preview from '@/views/PreviewPage.vue'
// 检测是否为移动端
// function isMobile () {
//     return /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
// }

const router = createRouter({

    history: createWebHistory(),
    routes: [
        // { path: '/', name: 'Preview', component: Preview },
        // { path: '/preview', redirect: '/' },
        { path: '/', name: 'Home', component: HomePage },
        { path: '/home', redirect: '/' },

        // 移动端路由
        { path: '/m/home', name: 'mHome', component: () => import('@/views/HomeMPage.vue') },
        { path: '/m/healthy', name: 'mHealthy', component: () => import('@/views/HealthyMPage.vue') },
        { path: '/m/whyus', name: 'mOurstory', component: () => import('@/views/OurstoryMPage.vue') },
        { path: '/m/support', name: 'mSupport', component: () => import('@/views/SupportMPage.vue') },
        { path: '/m/products', name: 'mProducts', component: () => import('@/views/ProductsMPage.vue') },
        { path: '/m/productDetail', name: 'mProductDetail', component: () => import('@/views/ProductMDetail.vue') },

        // PC端路由
        { path: '/healthy', name: 'Healthy', component: () => import('@/views/HealthyPage.vue') },
        { path: '/products', name: 'Products', component: () => import('@/views/ProductsPage.vue') },
        { path: '/productDetail', name: 'ProductDetail', component: () => import('@/views/ProductDetail.vue') },
        { path: '/support', name: 'Support', component: () => import('@/views/SupportPage.vue') },
        { path: '/whyus', name: 'whyus', component: () => import('@/views/OurstoryPage.vue') },
        { path: '/footer', name: 'Footer', component: () => import('@/components/FooterPage.vue') },
    ],
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0, left: 0 }
        }
    }
})

// 👇 路由守卫：根据设备类型跳转
// router.beforeEach((to, from, next) => {
//     const mobile = isMobile()
//     const isMobileRoute = to.path.startsWith('/m/')

//     if (mobile && !isMobileRoute) {
//         // 移动端访问PC路由 → 跳到对应 /m/ 下路径
//         const mobilePath = '/m' + to.path
//         const exist = router.getRoutes().some(r => r.path === mobilePath)
//         next({
//             path: exist ? mobilePath : '/m/home',
//             query: to.query,
//             params: to.params
//         })
//     } else if (!mobile && isMobileRoute) {
//         // PC访问移动端路由 → 去掉 /m
//         const pcPath = to.path.replace(/^\/m/, '') || '/'
//         const exist = router.getRoutes().some(r => r.path === pcPath)
//         next({
//             path: exist ? pcPath : '/',
//             query: to.query,
//             params: to.params
//         })
//     } else {
//         next()
//     }
// })


export default router
