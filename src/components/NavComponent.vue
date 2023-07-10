<script setup>
import { ref, onMounted } from 'vue';
import routesData from '../router/routesData';

const selectedKeys = ref([]);
const menuItems = ref([]);

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
        <a-menu-item v-for="menuItem in menuItems" :key="menuItem.path" :to="menuItem.path">
          {{ menuItem.name }}
        </a-menu-item>
      </a-menu>
    </a-layout-header>
  </template>