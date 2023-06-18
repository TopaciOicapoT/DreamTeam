<template>
    <div>
        <h1>Tu equipo se ha creado correctamente</h1>
    </div>
    <div>
        <span>volver mis pilotos</span>
        <button @click="back">Volver</button>
    </div>
</template>

<script setup>
import router from '../router/routes'
const back = ()=> {
    router.push("/createteam")
}

</script>

<style lang="scss" scoped>

</style>