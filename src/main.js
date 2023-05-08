
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/routes'
import { createPinia } from "pinia"
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import { VueQueryPlugin } from "@tanstack/vue-query";

const app = createApp(App)
app.use(router).use(VueQueryPlugin).use(Antd).use(createPinia());
app.mount("#app");