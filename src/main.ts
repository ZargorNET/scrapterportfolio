import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
// @ts-ignore
import VueFullPage from 'vue-fullpage.js'

createApp(App).use(VueFullPage).mount('#app')
