import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '../stores/user'
const requiereAuth = async (to, from, next) => {
    const userStore = useUserStore()
    const user = await userStore.currentUser()
    if (user) {
        next()

    } else {
        next('/login')
    }
}



const routes = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    // esto crea una clase global que se añade a los link activos
    linkActiveClass: "active",
    routes: [
        {
            path: '/',
            name: 'home',
            beforeEnter: requiereAuth,
            component: () => import('../views/Home.vue')
        },
        {
            path: '/createteam',
            name: 'createteam',
            beforeEnter: requiereAuth,
            component: () => import('../views/CreateTeam.vue')
        },
        {
            path: '/confirmcreateteam',
            name: 'confirmcreateteam',
            beforeEnter: requiereAuth,
            component: () => import('../views/confirmCreateTeam.vue')
        },
        {
            path: '/results/',
            name: 'results',
            beforeEnter: requiereAuth,
            component: () => import('../views/results.vue')
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('../views/register.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/Login.vue')
        },
    ]
})

export default routes