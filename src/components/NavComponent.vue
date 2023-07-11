<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink, useRoute } from "vue-router";
import routesData from '../router/routesData';
import { useUserStore } from "../stores/user";
const selectedKeys = ref([]);
const menuItems = ref([]);
const userStore = useUserStore();

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

onMounted(() => {
    menuItems.value = routesData.filter((route) => route.hasOwnProperty('isMenuItem') && route.isMenuItem);
});
</script>

<template>
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <div class="logo" />
      <a-menu
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item v-for="menuItem in menuItems" :key="menuItem.path" v-if="userStore.userLoged">
          <RouterLink :to="menuItem.path">
            {{ capitalizeFirstLetter(menuItem.name) }}
          </RouterLink>
        </a-menu-item>
      </a-menu>
    </a-layout-header>
  </template>