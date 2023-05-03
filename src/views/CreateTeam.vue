<template>
  <div class="content">
    <div>
      <h1 class="title1">Pilotos</h1>
      <div class="box">
        <h3 class="box-title">MotoGP</h3>
        <ul class="list-group">
            <li
            class="list-group-item"
            v-for="(rider, index) in riders"
            :key="index"
            >
              {{ rider.rider }} {{ rider.position }}ª <br> Puntos actuales: {{ rider.newPoints }} <br> Valor: {{ rider.points }}.000 $<br>
              <button v-show="rider.active" @click="add(rider)" v-if="rider.active" class="btn btn-primary mb-2 mt-3">Añadir</button>
            </li>
     
        </ul>
      </div>
    </div>
    
    <div>
      <h1 class="title1">Tu equipo</h1>
      <h2>Dineros {{ dollars }}.000  cucas.</h2>
      <h3>Puntuación de tu  equipo: {{ totalPoint }}</h3>
      <div class="box">
        <h3 class="box-title">MotoGP</h3>
        <ul class="list-group">
            <li
            class="list-group-item"
            v-for="(rider, index) in userTeam"
            :key="index"
            >
              {{ rider.rider }} {{ rider.points }} <br>
              <button @click="remove(rider)" class="btn btn-danger mb-2 mt-3">Eliminar</button>
            </li>
     
        </ul>
      </div>
    </div>

  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useTeams } from "../stores/teams";

const storeTeams = useTeams();
const ridersList = storeTeams.riders;
const dollars = ref(0)
const userTeam = storeTeams.userTeam;
const riders = storeTeams.riders;
const totalPoint = ref(0);
const suma = () => {
    userTeam.forEach((rider) =>{
        totalPoint.value += rider.newPoints
    })
}
riders.sort(function (a, b) {
  return a.position - b.position;
});

const add = (rider) =>{
  storeTeams.addRiderTeam(rider)
  dollars.value = storeTeams.dollars
  
}
const remove = (rider) =>{
  storeTeams.removeRiderTeam(rider)
  dollars.value = storeTeams.dollars
}
onMounted(()=>{
  suma()
  dollars.value = storeTeams.dollars
  ridersList.sort( (a, b) => {
      return a.position - b.position;

  });
})

</script>

<style lang="scss" scoped>

.content{
  display: flex;
  .title1 {
    border-bottom: 3px solid gray;
  }
  
    .box {
      padding: 1rem;
      border-right: 1px solid gray;
      border-left: 1px solid gray;
  
      .box-title{
        background-color: orange;
        border-radius: 5px;
        padding: 10px;
        color: black;
      }
      .list-group{
        
        .list-group-item{
          border: 2px solid rgb(0, 0, 0) !important;
        }
      }
    }

}

</style>
