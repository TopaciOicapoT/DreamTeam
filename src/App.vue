<script setup>
import { RouterView } from "vue-router";
import NavComponent from "./components/NavComponent.vue"


</script>

<template>
  <a-layout>
    <!-- Navegacion-->
    <NavComponent />
    <a-layout-content class="p-3 mt-4">
      <!-- Routing-->
      <RouterView></RouterView>
    </a-layout-content>
    <a-layout-footer >
      <!-- <Footer></Footer> -->
    </a-layout-footer>
  </a-layout>
</template>

<style>

</style>