<template>
    <div class="box">
        <h1>Ya no veras mas a ese piloto 👌</h1>
        <button @click="router.push(`/addrider`)">Vale pues vamonos</button>
    </div>
</template>

<script setup>
import {useRouter} from 'vue-router'
const router = useRouter()


    
</script>

<style lang="scss" scoped>
.box{
    
    padding: 15px;
}
</style>