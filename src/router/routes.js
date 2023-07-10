import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '../stores/user'
import routesData from './routesData';


const requiereAuth = async (to, from, next) => {
    const userStore = useUserStore()
    const user = await userStore.currentUser()
    if (user) {
        next()

    } else {
        next('/login')
    }
}

const generatePermission = (route) => {
    if (!route.permission)
        return requiereAuth;
    return;
}



export const routes = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    // esto crea una clase global que se añade a los link activos
    linkActiveClass: "active",
    // Añado beforeEnter a todas las rutas
    routes: routesData.map(route => ({...route,  beforeEnter: generatePermission(route) })),
})

export default routes;