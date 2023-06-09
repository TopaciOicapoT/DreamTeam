
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/routes'
import { createPinia } from "pinia"
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import { VueQueryPlugin } from "@tanstack/vue-query";
import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp } from './Services/FirebaseService'

const app = createApp(App)
app.use(router);
app.use(VueQueryPlugin)
app.use(Antd)
app.use(createPinia())
app.use(VueFire, {
    // imported above but could also just be created here
    firebaseApp,
    modules: [
    // we will see other modules later on
    VueFireAuth(),
    ],
});

app.mount("#app");