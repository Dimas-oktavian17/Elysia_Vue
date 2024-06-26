import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { plugin, defaultConfig } from '@formkit/vue'
import '@/assets/index.css'
import App from './App.vue'
import router from './router'

// * component
import { Icon } from '@iconify/vue';
import { Button } from './components/ui/button'
import CardComponent from './components/ui/card/CardComponent.vue'
import DefaultLayouts from '@/layouts/DefaultLayouts.vue'
import HeaderItem from '@/components/ui/header/HeaderItem.vue'
import NavItem from '@/components/ui/header/NavItem.vue'
import FooterItem from '@/components/ui/footer/FooterItem.vue'
import FormVue from '@/components/ui/forms/FormVue.vue'
import AlertVue from '@/components/ui/alert/AlertComponent.vue'
import AlertError from '@/components/ui/alert/AlertError.vue'
import TestVue from '@/components/ui/tes/TestVue.vue'

const app = createApp(App)
app
    .component('DefaultLayouts', DefaultLayouts)
    .component('HeaderItem', HeaderItem)
    .component('NavItem', NavItem)
    .component('FooterItem', FooterItem)
    .component('IconVue', Icon)
    .component('ButtonVue', Button)
    .component('CardComponent', CardComponent)
    .component('FormVue', FormVue)
    .component('AlertVue', AlertVue)
    .component('AlertError', AlertError)
    .component('TestVue', TestVue)
    .use(plugin, defaultConfig)
    .use(createPinia())
    .use(router)
    .mount('#app')
