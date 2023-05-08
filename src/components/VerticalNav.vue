<template>
    <nav class="vertical-nav">
        <RouterLink class="btn" to="/">INICIO</RouterLink>
        <RouterLink class="btn" to="/createteam">Crear equipo</RouterLink>
        <RouterLink class="btn" to="/addrider">Añadir pilotos</RouterLink>
    </nav>
</template>
<script>
import { RouterLink } from 'vue-router'

</script>
<style>
    .vertical-nav {
        display: flex;
        flex-direction: column;
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