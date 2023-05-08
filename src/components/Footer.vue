<template>
    <a-row class="footer-row">
      <a-col :span="6" class="footer-col">
        <div class="image-container">
          <span class="logo">DREAM TEAM</span>
        </div>
      </a-col>
      <a-col :span="6" class="footer-col">
        <p>{{ firstParagraph }}</p>
      </a-col>
      <a-col :span="6" class="footer-col">
        <div>
          <p>{{ secondParagraph }}</p>
        </div>
      </a-col>
      <a-col :span="6" class="footer-col">
        <div>
          <p>{{ thirdParagraph }}</p>
        </div>
      </a-col>
    </a-row>
  </template>
<script>
export default {
  data() {
    return {
      firstParagraph: "¡Descubre el emocionante mundo de las carreras de MotoGP! Nuestra página web te ofrece la oportunidad de gestionar tu propio equipo de MotoGP y competir con otros jugadores por premios en efectivo.",
      secondParagraph: "Nuestros desarrolladores, Marquitos y Satiringo, son expertos en el desarrollo de juegos en línea y han trabajado en algunos de los títulos más exitosos de la industria.",
      thirdParagraph: "Estamos en la fase inicial de la construcción de nuestra página web, pero ya estamos trabajando duro para ofrecerte la mejor experiencia de juego posible. ¡Mantente atento a nuestra primera versión, que se lanzará muy pronto!"
    };
  }
};
</script>
<style scoped>
.image-container {
  width: 100%;
  /* height: 300px; */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  padding: 10px;
  
}
.image-container a-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  
}
.footer-col{
    padding-bottom: 20px;
    padding: 20px;
    margin-bottom: 20px;
    font-size: 12px;
}
.logo {
    color: black
}
</style>