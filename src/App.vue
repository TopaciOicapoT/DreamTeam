<script setup>
  import './assets/styles.scss'
  import { RouterLink, RouterView } from 'vue-router'
  import Footer from './components/Footer.vue';
  import Header from './components/Header.vue'
  import VerticalNav from './components/VerticalNav.vue'
</script>

<template>
  <a-layout class="ant-layout" >
    <a-layout-sider><VerticalNav></VerticalNav></a-layout-sider>
    <a-layout >
      <a-layout-header class="ant-header" style="height: 20%;"><Header></Header></a-layout-header>
      <a-layout-content class="ant-layout-content"><RouterView></RouterView></a-layout-content>
      <a-layout-footer class="ant-layout-footer"><Footer></Footer></a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<style lang="scss">
  .carousel{
    max-height: 200px;
    overflow: hidden;
  }
  .ant-layout {
    height: 100vh;
  }
  .ant-layout-footer {
    height: 10%;
    padding: 30px;
    overflow: hidden;
  }
  .ant-layout-content {
    height: 100%;
    padding: 50px;
  }
</style>

