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
              {{ rider.rider }} {{ rider.position }}ª <br> Puntos actuales: {{ rider.newPoints }} <br> Puntos iniciales: {{ rider.points }}<br>
              <button v-show="rider.active" @click="add(rider)" v-if="rider.active" class="btn btn-primary mb-2 mt-3" :disabled="!rider.active">Añadir</button>
            </li>
     
        </ul>
      </div>
    </div>
    
    <div>
      <h1 class="title1">Tu equipo</h1>
      <div class="box">
        <h3 class="box-title">MotoGP</h3>
        <ul class="list-group">
            <li
            class="list-group-item"
            v-for="(rider, index) in userTeam"
            :key="index"
            >
              {{ rider.rider }} {{ rider.points }} <br>
              <button @click="remove(rider)" class="btn btn-danger mb-2 mt-3" :disabled="!rider.active">Eliminar</button>
            </li>
     
        </ul>
      </div>
    </div>

  </div>
</template>

<script setup>
import { useTeams } from "../stores/teams";

const storeTeams = useTeams();


const userTeam = storeTeams.userTeam;
const riders = storeTeams.riders;
riders.sort(function (a, b) {
  return a.position - b.position;
});

const add = (rider) =>{
  return storeTeams.addRiderTeam(rider)
}
const remove = (rider) =>{
  return storeTeams.removeRiderTeam(rider)
}
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
