import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/pages/Home.vue'
import Game from '../components/pages/Game.vue'

const routes = [
    { path: '/' , component: Home },
    { path: '/home' , component: Home },
    { path: '/game', component: Game }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router