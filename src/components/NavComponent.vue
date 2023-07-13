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
            {{ capitalizeFirstLetter(menuItem.title ?? menuItem.name) }}
          </RouterLink>
        </a-menu-item>
        <a-menu-item v-else>
            <login-outlined />
            <span>Login</span>
        </a-menu-item>
        <a-sub-menu 
          key="Perfil" 
          style="margin-left: auto; right:0;"
          >
          <template #title>
            <a-typography>
              Tu nombre loco
              <a-avatar size="small">
                <template #icon>
                  <UserOutlined />
                </template>
              </a-avatar>
            </a-typography>
          </template>
          <a-menu-item v-if="userStore.userLoged" style="margin-left: auto; right:0;">
            <RouterLink to="/profile">Perfil</RouterLink>
          </a-menu-item>
        <a-menu-item v-if="userStore.userLoged" >
          <a-button type="secondary"><logout-outlined />Logout</a-button>
        </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-header>
  </template>