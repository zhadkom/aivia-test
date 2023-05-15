import { createApp } from 'vue'
import App from './App.vue'

import './assets/style/normalize.css'

import {createVuetify} from 'vuetify'
import 'vuetify/styles'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import './assets/style/style.css'



import router from './router'
const Vuetify = createVuetify({
    components,
    directives,
})

createApp(App).use(router).use(Vuetify).mount('#app')
