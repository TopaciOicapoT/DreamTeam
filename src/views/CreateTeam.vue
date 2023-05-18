<template>
  <div class="content">
    <div>
      <h1 class="title1">Pilotos</h1>
      <div class="box">
        <h3 class="box-title">MotoGP</h3>
        <p v-if="storeTeams.isLoading">Cargando pilotos</p>
        <ul v-else class="list-group">
            <li
            class="list-group-item"
            v-for="(rider, index) in ridersList"
            :key="index"
            >
              {{ rider.rider?.name }}<br> Valor: {{ rider.rider?.value }}.000 $<br>
              <button @click="add(rider)"  class="btn btn-primary mb-2 mt-3">Añadir</button>
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
              {{ rider?.name }} {{ rider?.value }} <br>
              <button @click="remove(rider)" class="btn btn-danger mb-2 mt-3">Eliminar</button>
            </li>
     
        </ul>
      </div>
    </div>

  </div>
</template>

<script setup>
import { createRenderer, onMounted, ref } from "vue";
import { useTeams } from "../stores/teams";

const storeTeams = useTeams();
const ridersList = storeTeams.allRiders;
const dollars = ref(0)
const userTeam = storeTeams.userTeam;
const riders = storeTeams.riders;
const totalPoint = ref(0);
const listPoints = []
const suma = (rider) => {
    listPoints.push(rider.rider.value)
    totalPoint.value = rider.rider.value
    listPoints.reduce((a, b)=> {
     
      return totalPoint.value = a+b;
    })
    
  }
const add = (rider) =>{
  storeTeams.addRiderTeam(rider)
  dollars.value = storeTeams.dollars
  if (storeTeams.confirmAddRiderTeam) {
    suma(rider)
  }
}
const remove = (rider) =>{
  let element = rider
  let index = userTeam.indexOf(element)
  console.log(index)
  totalPoint.value -= rider.value
  storeTeams.removeRiderTeam(rider)
  listPoints.splice(index, 1)
  dollars.value = storeTeams.dollars
  
}
onMounted(async()=>{
  if (storeTeams.allRiders.length === 0) {  
    storeTeams.getAllRiders(); 
  }
  dollars.value = storeTeams.dollars
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
