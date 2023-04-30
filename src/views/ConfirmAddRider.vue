<template>
    <div class="box">
        <h1>Piloto pa dentro papi</h1>
        <button @click="back">Vale pues vamonos</button>
    </div>
</template>

<script setup>
    import router from '../router/routes'

    const back = () => {
        router.push('/addrider')
    }
</script>

<style lang="scss" scoped>
.box{
    padding: 15px;
}
</style>