<script setup>
import { RouterView } from "vue-router";
// import Footer from "./components/Footer.vue";
// import Header from "./components/Header.vue";
import NavComponent from "./components/NavComponent.vue"
// import VerticalNav from "./components/VerticalNav.vue";
// import "./assets/styles.scss";


</script>

<!-- <template>


  <a-layout class="container">
    <VerticalNav></VerticalNav>
    <a-layout-header class="ant-header" style="height: 250px"
      ><Header></Header
    ></a-layout-header>
    <a-layout class="ant-layout_main">
      <a-layout-content class="ant-layout-content">
        
      </a-layout-content>

      <a-layout-footer
        class="ant-layout-footer"
      >
        <Footer></Footer>
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template> -->

<template>
  <a-layout>
    <!-- Navegacion-->
    <NavComponent />
    <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
      <!-- Routing-->
      <RouterView></RouterView>
    </a-layout-content>
    <a-layout-footer >
      <!-- <Footer></Footer> -->
    </a-layout-footer>
  </a-layout>
</template>

<style>
#components-layout-demo-fixed .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
.site-layout .site-layout-background {
  background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>