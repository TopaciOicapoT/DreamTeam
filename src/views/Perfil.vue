<template>
    <p v-if="userStore.loadingUser">Cargando...</p>
    <div class="photo">
    <h1>Perfil de usuario</h1>
      <a-avatar class="photo" :src="userStore.userData.photoURL" :size="150"></a-avatar>
    </div>
    <a-row class="form">
      <a-col :xs="{ span: 24 }" :sm="{ span: 12, offset: 6 }">
        <p v-if="userStore.loadingUser">Loading docs...</p>

        <a-form
          name="basicPerfil"
          autocomplete="off"
          layout="vertical"
          :model="userStore.userData"
          @finish="onFinish"
        >
          <a-form-item
            label="Tu correo (no modificable)"
            name="email"
            :rules="[
              {
                required: true,
                type: 'email',
                whitespace: true,
                message: 'Ingrese un email válido',
              },
            ]"
          >
            <a-input disabled v-model:value="userStore.userData.email" />
          </a-form-item>
  
          <a-form-item
            label="Ingrese su nickName"
            name="displayName"
            :rules="[
              {
                required: true,
                whitespace: true,
                message: 'Ingrese un nick válido',
              },
            ]"
          >
            <a-input v-model:value="userStore.userData.displayName" />
          </a-form-item>
  
          <a-upload
            v-model:file-list="fileList"
            :before-upload="beforeUpload"
            list-type="picture"
            :max-count="1"
            @change="handleChange"
          >
            <a-form-item
              label="Seleccione imagen"
              name="displayName"
              :rules="[
                {
                  required: true,
                  whitespace: true,
                  message: 'Seleccione imagen',
                },
              ]"
            >
              <a-button
                :disabled="userStore.loadingUser"
                :loading="userStore.loadingUser"
                >Actualizar foto de perfil</a-button
              >
            </a-form-item>
          </a-upload>
  
          <a-form-item>
            <a-button
            class="mt-3"
              type="primary"
              html-type="submit"
              :disabled="userStore.loadingUser"
              :loading="userStore.loadingUser"
              >Actualizar información</a-button
            >
          </a-form-item>
        </a-form>
      </a-col>
    </a-row>
  </template>
  
  <script setup>
  import { message } from "ant-design-vue";
  import { ref } from "vue";
  import { useUserStore } from "../stores/user";
  const userStore = useUserStore();

  const fileList = ref([]);
   
  const beforeUpload = () => {
    return false;
  };
  

  const handleRemove = () => {
    const newFileList = [];
    fileList.value = newFileList;
  };

  const handleChange = (file) => {
    if (file.status !== "uploading") {
    //   console.log(file.fileList[0].type);
    //   console.log(file.fileList[0].size);
    //   console.log(file.fileList[0]);
     
      const isJpgOrPng = file.fileList[0].type === "image/jpg" || file.fileList[0].type === "image/png" || file.fileList[0].type === "image/jpeg";
      if (!isJpgOrPng) {
        message.error("Solo imágenes png o jpg!");
        handleRemove();
        return;
      }
      const isLt2M = file.fileList[0].size / 1024 / 1024 < 2;
      if (!isLt2M) {
        message.error("Máximo 2MB!");
        handleRemove();
        return;
      }
    }
  };
  
  const onFinish = async () => {
    // console.log(fileList.value[0])
  
    // guardamos la imagen el el Storage, en la función tenemos el parámetro img, desde aqui le mandamos el valor de fileList.value[0], que contiene la imagen 
  
    const error = await userStore.updateUser(userStore.userData.displayName, fileList.value[0]);
  
    if (!error) {
      return message.success("Se actualizó el perfil");
    }
    message.error("Ocurrió un error al actualizar el perfil");
  };
  </script>
  
  <style scoped>
  .photo{
    display: grid;
    place-items: center;
    margin: 1rem;
  }
  .form{
    margin: 2rem;
  }
  </style>