import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./routes/index";
import i18n from './lang/index.js'
createApp(App)
       .use(i18n)
       .use(router)
       .mount('#app')
