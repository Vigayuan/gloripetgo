/*
 * @Description: 
 * @Author: Viga
 * @Date: 2025-09-17 13:57:30
 * @LastEditTime: 2025-10-31 11:00:07
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style.css'
import "swiper/css"
import "swiper/css/navigation"
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import 'amfe-flexible'
createApp(App).use(router).use(Antd).mount('#app')
