import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import router from './router'

import './assets/css/nucleo-icons.css'
import './assets/css/nucleo-svg.css'

import './assets/scss/argon-dashboard.scss'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import './assets/scss/main.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)

app.provide('axios', axios)

app.mount('#app').$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
});
