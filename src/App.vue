<script setup>
  import './assets/styles.scss'
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="topLine container-fluid"></div>
    <div class="header">
      <div id="carouselExampleFade" class="carousel  slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/img/motoNeon.jpg" class="d-block w-100 imag" alt="...">
          </div>
          <div class="carousel-item">
            <img src="/img/Mi proyecto.jpg" class="d-block w-100 imag" alt="...">
          </div>
          <div class="carousel-item">
            <img src="/img/motoRossi.jpg" class="d-block w-100 imag" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

    </div>
     
       <div class="topLine"></div>
       <nav class="navBar">
         <RouterLink class="btn" to="/">INICIO</RouterLink>
         <RouterLink class="btn" to="/createteam">Crear equipo</RouterLink>
         <!-- <RouterLink class="btn" to="/register">Registrar</RouterLink> -->
         <RouterLink class="btn" to="/addrider">Añadir pilotos</RouterLink>
       </nav>
       <div class="topLine"></div>
       <div class="container text-center">
         <RouterView></RouterView>
       </div>
  
</template>

<style lang="scss">
  .carousel{
    max-height: 200px;
    overflow: hidden;
  }
</style>

