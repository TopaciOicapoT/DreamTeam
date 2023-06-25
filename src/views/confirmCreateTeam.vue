<template>
    <div>
        <h1>Tu equipo se ha creado correctamente</h1>
    </div>
    <a-form>
        <a-form-item>Volver al inicio 👍</a-form-item>
        <a-button @click="back">Volver</a-button>
    </a-form>
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