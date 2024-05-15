import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
// createApp(App).use(store).use(router).mount('#app')
