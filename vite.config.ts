import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

defineConfig({
    plugins: [vue()],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
          @import "./src/scss/fontface.scss";
        `,
            },
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    server: {
        host: '0.0.0.0',
    },
    base: './',
})
