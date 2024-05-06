import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { plugin, defaultConfig } from '@formkit/vue'
import '@/assets/index.css'


import App from './App.vue'
import router from './router'

// * component
import { Icon } from '@iconify/vue';
import { Button } from './components/ui/button'
import DefaultLayouts from './layouts/DefaultLayouts.vue'
import HeaderItem from '@/components/ui/header/HeaderItem.vue'
import NavItem from '@/components/ui/header/NavItem.vue'
import FooterItem from '@/components/ui/footer/FooterItem.vue'
const app = createApp(App)
app
    .component('DefaultLayouts', DefaultLayouts)
    .component('HeaderItem', HeaderItem)
    .component('NavItem', NavItem)
    .component('FooterItem', FooterItem)
    .component('IconVue', Icon)
    .component('ButtonVue', Button)
    .use(plugin, defaultConfig)
    .use(createPinia())
    .use(router)
    .mount('#app')
