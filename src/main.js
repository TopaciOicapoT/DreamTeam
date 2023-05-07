
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import router from './router/routes'
import { createPinia } from "pinia"
import { VueQueryPlugin } from "@tanstack/vue-query";

const app = createApp(App)
app.use(router).use(createPinia()).mount('#app')
app.use(VueQueryPlugin)
 