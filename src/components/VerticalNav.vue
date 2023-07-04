<template>
     <a-layout>

         <a-layout-header
         class="layout-header"
         :style="{ position: 'fixed', zIndex: 1, width: '100%' }"
  >
    <a-menu
      class="menu"
      v-model:selectedKeys="selectedKeys"
      theme="dark"
      mode="horizontal"
      :style="{ lineHeight: '64px' }"
    >
    <a-menu-item class="menu-item" v-if="userStore.userLoged" key="1"
    ><RouterLink to="/">INICIO</RouterLink></a-menu-item
    >
    <a-menu-item class="menu-item" v-if="userStore.userLoged" key="2"
    ><RouterLink to="/createteam">Crear equipo</RouterLink></a-menu-item
    >
    <a-menu-item class="menu-item" v-if="!userStore.userLoged" key="3"
    ><RouterLink to="/login">Loging</RouterLink></a-menu-item
    >
    <a-menu-item class="menu-item" v-if="!userStore.userLoged" key="4"
    ><RouterLink to="/register">Registrarme</RouterLink></a-menu-item
    >
    <a-menu-item
    class="menu-item"
    v-if="userStore.userLoged"
    @click="userStore.logoutUser"
    key="5"
    >Logout</a-menu-item
    >
</a-menu>
</a-layout-header>
</a-layout>
</template>
<script setup>
import { RouterLink, useRoute } from "vue-router";
import { useUserStore } from "../stores/user";
import { computed, onMounted, ref, watch } from "vue";

const userStore = useUserStore();
const selectedKeys = ref([1]);

const route = useRoute();
watch(
  () => route.path,
  (newPath) => {
    if (newPath === "/") {
      selectedKeys.value = ["1"];
    } else if (newPath === "/createteam") {
      selectedKeys.value = ["2"];
    } else if (newPath === "/login") {
      selectedKeys.value = ["3"];
    } else if (newPath === "/register") {
      selectedKeys.value = ["4"];
    }else{
        selectedKeys.value = ["5"];

    }
  }
);

onMounted(() => {
  watch(
    () => route.path,
    (newPath) => {
      if (newPath === "/") {
        selectedKeys.value = ["1"];
      } else if (newPath === "/createteam") {
        selectedKeys.value = ["2"];
      } else if (newPath === "/login") {
        selectedKeys.value = ["3"];
      } else if (newPath === "/register") {
        selectedKeys.value = ["4"];
      }else{
        selectedKeys.value = ["5"];

    }
    }
  );
});
</script>
<style lang="scss" scoped>
.layout-header {
  background: black !important;
  .menu {
    background: black !important;

    .menu-item {
      background: black !important;
    }
  }
}
</style>
