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
        <a-menu-item class="menu-item" v-if="userStore.userLoged" key="4"
          ><RouterLink to="/profile">Perfil</RouterLink></a-menu-item
        >
        <a-menu-item class="menu-item" v-if="!userStore.userLoged" key="5"
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
    } else if (newPath === "/profile") {
      selectedKeys.value = ["4"];
    } else if (newPath === "/register") {
      selectedKeys.value = ["5"];
    } else {
      selectedKeys.value = ["6"];
    }
  }
);

onMounted(() => {
  watch(
    () => route.path,
    (newPath) => {
      if (newPath === "/") {
      } else if (newPath === "/createteam") {
        selectedKeys.value = ["2"];
      } else if (newPath === "/login") {
        selectedKeys.value = ["3"];
      } else if (newPath === "/profile") {
        selectedKeys.value = ["4"];
      } else if (newPath === "/register") {
        selectedKeys.value = ["5"];
      } else {
        selectedKeys.value = ["6"];
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
