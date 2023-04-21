import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    // esto crea una clase global que se añade a los link activos
    linkActiveClass: "active",
    routes: [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue')
    },    
    {
        path: '/Results',
        name: 'results',
        component: () => import('../views/Results.vue')
    },    
]
})

export default router