<template>
    <h1 class="title1">DREAM TEAM</h1>
    <div class="homeBox">
        <div class="box">
            <h3>Clasificación</h3>
            <ul class="list-group">
            <li class="list-group-item" v-for="(resultado, index) in resultados" :key="index">{{ resultado }}</li>
        </ul>
        </div>
        <div class="box">
            <h3>opción 2</h3>
        </div>
        <div class="box">
            <h3>opción 3</h3>
        </div>
    </div>


</template>

<script setup>
import '../assets/styles.scss'
import { ref } from 'vue';





    const resultados = ref([
        "21 06/11/2022 ",
        "20 08/11/2022  ",
        "19 06/11/2022 ",
        "18 08/11/2022  ",
        "17 06/11/2022 ",
        "16 08/11/2022  ",
        "15 06/11/2022 ",
        "14 08/11/2022  ",

    ])

</script>

<style lang="scss" scoped>

.title1{
  border-bottom: 3px solid gray;
}
.homeBox{
  display: flex;
  place-items: center;
  justify-content: space-around;
  padding: 1rem;
  border-right: 1px solid gray;
  border-left: 1px solid gray;
  .box{
    padding: 1rem;
    border-right: 1px solid gray;
    border-left: 1px solid gray;
  }
}
</style>

