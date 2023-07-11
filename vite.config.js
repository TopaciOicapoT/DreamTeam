import vue from '@vitejs/plugin-vue';
import { defineConfig } from "vite";
import sass from 'sass';
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [AntDesignVueResolver(
        { importStyle: "less" }  // importante
      )],
    }),
  ],
  define: {
    'process.env': process.env
  },
  css: {
    preprocessorOptions: { 
      less: {
        modifyVars: {
          "primary-color": "#3F88C5",
          "layout-header-background":"#011936",
          "body-background": "#060019",
          "link-color": "red",
          "text-color": "#FFFFFF",
          "menu-item": "#FFFFFF",
          "component-background":"#060019",
          "layout-body-background":"#060019"
        },
        javascriptEnabled: true,
      },
    },
  },
});