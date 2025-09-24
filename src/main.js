/*
 * @Description: 
 * @Author: Viga
 * @Date: 2025-09-17 13:57:30
 * @LastEditTime: 2025-09-24 14:59:27
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style.css'
import "swiper/css"
import "swiper/css/navigation"

createApp(App).use(router).mount('#app')
