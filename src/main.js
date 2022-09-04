import { createApp } from 'vue'
import { createPinia } from 'pinia'

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

app.mount('#app').$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
});
