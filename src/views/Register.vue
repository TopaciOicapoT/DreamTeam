<template>
    <div class="container">

    
  <h1 class="text-center">Registrarte aqui</h1>
    <a-row>
        <a-col
            :xs="{ span: 24 }"
            :sm="{ span: 18, offset: 3 }"
            :lg="{ span: 12, offset: 6 }"
        >

            <a-form
                :model="formState"
                @finishFailed="onFinishFailed"
                @finish="onFinish"
                name="basicTwo"
                layout="vertical"
                autocomplete="off"
            >
                <a-form-item
                    label="Nombre"
                    name="nombre"
                >
                    <a-input v-model:value="formState.name"></a-input>
                </a-form-item>
                <a-form-item
                    label="Email"
                    name="email"
                    :rules="[
                        {
                            required: true,
                            type: 'email',
                            message: 'Por favor escriba un email válido',
                        },
                    ]"
                >
                    <a-input v-model:value="formState.email"></a-input>
                </a-form-item>
                <a-form-item
                    label="Contraseña"
                    name="password"
                    :rules="[
                        {
                            required: true,
                            min: 6,
                            message:
                                'Por favor escriba una contraseña de 6 carácteres',
                        },
                    ]"
                >
                    <a-input-password
                        v-model:value="formState.password"
                    ></a-input-password>
                </a-form-item>
                <a-form-item
                    label="Repita contraseña"
                    name="repassword"
                    :rules="{ validator: validatePass }"
                >
                    <a-input-password
                        v-model:value="formState.repassword"
                    ></a-input-password>
                </a-form-item>
                <a-form-item>
                    <a-button type="primary" html-type="submit" :disabled="userStore.loadingUser" :loading="userStore.loadingUser"
                        >Crear cuenta</a-button
                    >
                </a-form-item>
            </a-form>
        </a-col>
    </a-row>

  <div class="containerGL">
    <h2>Ya tengo una cuenta</h2>
    <div>
      <a-button>
        <RouterLink class="btn" to="/login">Acceder a mi cuenta</RouterLink>

      </a-button>
    </div>
  </div>
</div>
</template>

<script setup>    
    
import router from "../router/routes";
import { reactive } from "vue";
import {useUserStore} from '../stores/user'
import { message } from 'ant-design-vue';

    const userStore = useUserStore()

    const  formState = reactive({
         email: '',
         password: '', 
         repassword:'',
         name: '',

    })


    //  VALIDACIÓN DE COINCIDENCIA DE CONTRASEÑA
const validatePass = async (_rule, value) => {
  if (value === ''){
    return Promise.reject('Repita contraseña')
  }
    if(value !== formState.password){
      return Promise.reject('No coinciden las contraseñas') 
    }
    return Promise.resolve()
  
}
//  VALIDACIÓN DE COINCIDENCIA DE CONTRASEÑA 

const onFinish = async (values) => {
    const error = await userStore.registerUser(formState.email, formState.password, formState.name);

    if(!error){
      // El return  hace que la función se interrumpa y nunca siga leyendo mas abajo

      // aqui usamos el message.success de Ant desing
      router.push("/login");
      message.success("Ya puedes acceder a la página 🏍️");
      return
    }
    switch(error){
      // aqui usamos el error que nos aparece en consola desde fire base que indica que el usuario no exixste
      case "auth/email-already-in-use":
        // aqui usamos el message.error de Ant desing
        message.error("Este correo ya esta en uso 😓");
        break;
       default:
       message.error("fallo aldo desde firebase, vuelva a intentarlo 🤧 ");
        break;
    }
    };
    
const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
};
</script>

<style lang="scss" scoped>

.container{
    text-align: center;
    margin: 3rem;
    input {
      color: rgb(4, 0, 0);
    }
    .containerGL{
      text-align: center;
    }
}
</style>
