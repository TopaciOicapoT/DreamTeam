<template>
    <div>
        <h1>Register</h1>

        <form @submit.prevent="handleSubmit">
            <input v-model.trim="email" type="email" placeholder="Introduce email">
            <input v-model.trim="password" type="password" placeholder="Introduce contraseña">
            <button type="submit">Crear usuario</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import {useUserStore} from '../stores/user'

const userStore = useUserStore()
const email = ref('')
const password = ref('')

const handleSubmit = () => {
    if (!email.value || password.lengt < 6) {
        return alert("Rellena los  campos")
    } else {
        console.log(email.value)
        console.log(password.value)
        userStore.registerUser(email.value, password.value)
        console.log('Enviado')
        
    }
}

</script>

<style lang="scss" scoped>

</style>