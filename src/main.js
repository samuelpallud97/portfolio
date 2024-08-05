import { createApp } from 'vue'
import AppPortfolio from './AppPortfolio.vue'
import VueRouter from './router'

const app = createApp(AppPortfolio)
app.use(VueRouter)

app.mount('#app')