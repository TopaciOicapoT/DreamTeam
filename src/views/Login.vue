<template>
  <div>
    <h1>Inicio de seión</h1>
    <h2>Dale a enter  con estos datos del tiron si no te bloquea el inicio, o si lo prefieres create un usuario para probarlo</h2>

    <form @submit.prevent="handleSubmit">
      <input v-model.trim="email" type="email" placeholder="Introduce email" />
      <input
        v-model.trim="password"
        type="password"
        placeholder="Introduce contraseña"
      />
      <button type="submit" :disabled="userStore.loadingUser">Acceder</button>
    </form>
  </div>
  <div>
    <h2>Si no tienes una cuenta creada puedes hacerlo aqui</h2>
    <div>
        <RouterLink class="btn" to="/register">Registrame</RouterLink>
    </div>
  </div>

</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "../stores/user";
import { RouterLink } from "vue-router";


const userStore = useUserStore();
const email = ref("test@gmail.com");
const password = ref("123456");

const handleSubmit = async () => {
  if (!email.value || password.lengt < 6) {
    return alert("Rellena los  campos");
  }
  await userStore.loginUser(email.value, password.value);
};
</script>

<style scoped>
input {
  color: white;
}
</style>
