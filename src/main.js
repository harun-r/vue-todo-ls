import { createApp } from 'vue'
import router from './router'
import '../src/assets/scss/app.scss'
import App from './App.vue'

const app = createApp(App)
app.use(router)
app.mount('#app')