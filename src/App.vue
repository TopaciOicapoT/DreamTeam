<script setup>
import { RouterView } from "vue-router";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import VerticalNav from "./components/VerticalNav.vue";
import "./assets/styles.scss";
</script>

<template>


  <a-layout class="container">
    <VerticalNav></VerticalNav>
    <a-layout-header class="ant-header" style="height: 250px"
      ><Header></Header
    ></a-layout-header>
    <a-layout class="ant-layout_main">
      <a-layout-content class="ant-layout-content">
        <RouterView></RouterView>
      </a-layout-content>

      <a-layout-footer
        class="ant-layout-footer"
      >
        <Footer></Footer>
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<style lang="scss" scoped>

  .ant-header{
   margin-top: 50px !important;
  }
  .ant-layout_main{
    margin-top: 30px ;
      margin: 1rem;
  padding: 1rem;
  
    .ant-layout-footer{
      background-color: rgba(255, 255, 255, 0.05)
    }
  
  
  }


</style>
