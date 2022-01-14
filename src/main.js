import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'
import router from './router'

createApp(App).use(router).use(store).mount('#app')
/* createApp(App).use(store).mount('#app') */
