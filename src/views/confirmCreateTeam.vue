<template>
    <div>
        <h1>Tu equipo se ha creado correctamente</h1>
    </div>
    <div>
        <span>Volver al inicio 👍</span>
        <button @click="back">Volver</button>
    </div>
</template>

<script setup>
import router from '../router/routes'
const back = ()=> {
    router.push("/")
    setTimeout(() => {
        location.reload()
    }, 1500);

}

</script>

<style lang="scss" scoped>

</style>