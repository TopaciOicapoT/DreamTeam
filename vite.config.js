import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import sass from 'sass'

export default defineConfig({
    plugins: [vue(), 
      Components({
        resolvers: [AntDesignVueResolver()],
      }),
    ],
    define: {
        'process.env': process.env
      },
      css: {
        preprocessorOptions: {
          scss: {
            implementation: sass
          }
        }
      }
    })
