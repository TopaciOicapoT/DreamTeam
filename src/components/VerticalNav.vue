<template>
    <nav class="vertical-nav">
        <RouterLink v-show="userStore.userLoged" class="btn" to="/">INICIO</RouterLink>
        <RouterLink v-show="userStore.userLoged" class="btn" to="/createteam">Crear equipo</RouterLink>
        <RouterLink v-show="userStore.userLoged" class="btn" to="/results">Resultados 2023</RouterLink>               
        <button v-show="userStore.userLoged" @click="userStore.logoutUser">Logout</button>
    </nav>
</template>
<script setup>
import { RouterLink, useRouter } from 'vue-router'
import {useUserStore} from "../stores/user"


const userStore = useUserStore()

</script>
<style>
    .vertical-nav {
        display: flex;
        flex-direction: column;
        margin-top: 250px;
    }
    .vertical-nav .btn {
        margin-bottom: 10px;
    }
    .vertical-nav {
        display: flex;
        flex-direction: column;
    }

    .vertical-nav .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        width: 100%;
        background-color: rgba(255,255,255,0.05);
        /* border: 2px solid red; */
        margin-bottom: 10px;
        padding: 0 10px;
    }

    .vertical-nav .btn:first-child {
        margin-top: 10px;
    }

    .vertical-nav .btn:last-child {
        margin-bottom: 10px;
    }
</style>