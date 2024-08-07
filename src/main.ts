import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes/index'
import i18n from './lang/index.js'
import {createPinia} from 'pinia'
import 'default-passive-events'
import thousandSeparator from '@/utils/thousand.ts'
import scroll from '@/utils/scroll.ts'

createApp(App)
    .directive('thousand', thousandSeparator)
    .directive('scroll', scroll)
    .use(i18n).use(createPinia())
    .use(router)
    .mount('#app')
