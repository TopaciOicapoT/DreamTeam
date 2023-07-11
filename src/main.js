
import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import { routes } from './router/routes'
import { createPinia } from "pinia"
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';
import { VueQueryPlugin } from "@tanstack/vue-query";
import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp } from './Services/FirebaseService'
import { ConfigProvider } from 'ant-design-vue';

const app = createApp(App)
app.use(ConfigProvider, {
    theme: themeConfig, // Configura el tema predefinido
  });
app.use(routes);
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