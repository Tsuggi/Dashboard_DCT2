import './assets/main.css'

import 'primeicons/primeicons.css'
import PrimeVue from 'primevue/config';
import Breadcrumb from 'primevue/breadcrumb';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(PrimeVue, {
    unstyled: true
})
app.component('Breadcrumb', Breadcrumb);

app.use(createPinia())
app.use(router)

app.mount('#app')
