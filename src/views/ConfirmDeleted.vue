<template>
    <div class="box">
        <h1>Ya no veras mas a ese piloto 👌</h1>
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