import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import { router } from './router'

const app = createApp(App)

app.config.performance = true
app.use(router)
app.mount('#root')
