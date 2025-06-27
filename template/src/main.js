import './assets/styles/main.css'

import { createApp } from 'vue'
import App from './layout/App.vue'
import router from './core/router'

const app = createApp(App)

app.use(router)

app.mount('#app')
