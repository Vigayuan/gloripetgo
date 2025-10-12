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
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

createApp(App).use(router).use(Antd).mount('#app')
