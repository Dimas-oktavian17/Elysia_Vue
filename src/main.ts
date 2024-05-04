import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// ? Library or plugin 
import { createPinia } from 'pinia'
import { plugin, defaultConfig } from '@formkit/vue'
import config from '../formkit.config'
import { Icon } from '@iconify/vue';
// ? Compponent config
import Hello from '@/components/Hello.vue'
// ? initialize libraries
const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
    .use(plugin, defaultConfig(config))
    .component('Hello', Hello)
    .component('Icon', Icon)
    .mount('#app')
