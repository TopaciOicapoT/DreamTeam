export default [
    {
        path: '/',
        name: 'home',
        title: 'Home Page',
        isMenuItem: true,
        component: () => import('../views/Home.vue')
    },
    {
        path: '/createteam',
        name: 'createteam',
        title: 'Create Team',
        permission: false,
        isMenuItem: true,
        component: () => import('../views/CreateTeam.vue')
    },
    {
        path: '/confirmcreateteam',
        name: 'confirmcreateteam',
        component: () => import('../views/confirmCreateTeam.vue')
    },
    {
        path: '/test',
        title: 'Test Page',
        name: 'test',
        isMenuItem:true,
        component: () => import('../views/Test.vue')
    },
    {
        path: '/profile',
        name: 'profile',
        permission: false,
        component: () => import('../views/Perfil.vue')
    },
    {
        path: '/results/',
        name: 'results',
        permission: false,
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
];