import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import '@fortawesome/fontawesome-free/scss/fontawesome.scss'

createApp(App)
  .use(VueAxios, axios)
  .mount('#app')

