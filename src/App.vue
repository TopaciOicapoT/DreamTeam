<script setup>
  import './assets/styles.scss'
  import { RouterView } from 'vue-router'
  import Footer from './components/Footer.vue';
  import Header from './components/Header.vue'
  import VerticalNav from './components/VerticalNav.vue'


  
</script>

<template>
  <a-layout class="ant-layout" >
    <a-layout-sider><VerticalNav></VerticalNav></a-layout-sider>
    <a-layout >
      <a-layout-header class="ant-header" style="height: 250px;"><Header></Header></a-layout-header>
      <a-layout-content class="ant-layout-content"><RouterView></RouterView></a-layout-content>
      <a-layout-footer class="ant-layout-footer" style="background-color: rgba(255,255,255,0.05);"><Footer></Footer></a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<style  lang="scss" scoped>
.ant-layout{
  width: 100% ;
  height: 100%;

  .ant-layout-footer {
    background-color: rgba(255,255,255,0.05);
    padding: 30px;
    overflow: hidden;
  }
  .ant-layout-content {
    height: 100%;
    padding: 50px;
  }
}
</style>

