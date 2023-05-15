import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import {createVuetify} from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import router from './router'

const Vuetify = createVuetify()

createApp(App).use(router).use(Vuetify).mount('#app')
