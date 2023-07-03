<template>
  <a-row class="containerLg">
    <a-col :xs="{ span: 24 }" :sm="{ span: 12, offset: 6 }">
      <p v-if="userStore.loadingUser">Loading docs...</p>

      <a-form
        name="basic"
        autocomplete="off"
        layout="vertical"
        :model="formState"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <a-form-item
          label="Ingrese su correo"
          name="email"
          :rules="[{ required: true, type: 'email', whitespace: true, message: 'Ingrese un email válido' }]"
        >
          <a-input v-model:value="formState.email" />
        </a-form-item>

        <a-form-item
          label="Introduzca contraseña"
          name="password"
          :rules="[
            { 
              required: true,
               whitespace: true,
               min:6,
               message: 'Ingrese una contraseña válida con un mínimo de 6 carácteres',
              
            },
          ]"
        >          
          <a-input-password v-model:value="formState.password" />
        </a-form-item>

        <a-form-item>

          <a-button
            type="primary"
            html-type="submit"
            :disabled="userStore.loadingUser"
            :loading="userStore.loadingUser"
            >Ingresar</a-button
          >
        </a-form-item>
      </a-form>
    </a-col>
  </a-row>



  <div class="containerGR">
    <h2>Si no tienes una cuenta creada puedes hacerlo aqui</h2>
    <div>
      <a-button>
        <RouterLink class="btn" to="/register">Registrame</RouterLink>
      </a-button>
    </div>
  </div>

</template>

<script setup>
import { reactive } from "vue";
import { useUserStore } from "../stores/user";
import { RouterLink } from "vue-router";
import { message } from "ant-design-vue";


const userStore = useUserStore();
const formState = reactive({
  email: "test@gmail.com",
  password: "123456",
});



const onFinish = async (values) => {
    const error = await userStore.loginUser(formState.email, formState.password);

    if(!error){
      return message.success("ole que maquina eres 👌");
    }
    switch(error){
      case "auth/user-not-found":
        message.error("no existe esa cuenta 😓");
        break;
      case "auth/wrong-password":
      message.error("Contraseña equivocada 🤦‍♂️");
        break;
       default:
       message.error("fallo algo desde firebase, vuelva a intentarlo 🤧 ");
        break;
    }
    };
    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };
</script>

<style lang="scss" scoped>

.containerLg{
  margin:3rem;
  input {
    color: rgb(0, 0, 0);
  }
}
.containerGR{
  text-align: center;
}
</style>
