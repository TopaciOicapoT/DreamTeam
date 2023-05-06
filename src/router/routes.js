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
        path: '/createteam',
        name: 'createteam',
        component: () => import('../views/CreateTeam.vue')
    },    
    {
        path: '/addrider',
        name: 'addrider',
        component: () => import('../views/AddRider.vue')
    },    
    {
        path: '/register',
        name: 'register',
        component: () => import('../views/register.vue')
    },    
    {
        path: '/confirmrider',
        name: 'confirmrider',
        component: () => import('../views/ConfirmAddRider.vue')
    },    
    {
        path: '/confirmdeleted',
        name: 'confirmdeleted',
        component: () => import('../views/ConfirmDeleted.vue')
    },    
]
})

export default router