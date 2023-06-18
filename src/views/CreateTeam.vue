<template>
  <div v-if="!storeTeams.isLoading" class="content">
    <div>
      <h1 class="title1">Pilotos moto GP</h1>
      <div v-if="storeTeams.userTeamMGP.length === 0" class="box">
        <h3 class="box-title">MotoGP</h3>
        <p v-if="storeTeams.isLoading">Cargando pilotos</p>
        <ul v-else class="list-group">
          <li
            class="list-group-item"
            v-for="(rider, index) in storeTeams.ridersMotoGp"
            :key="index"
          >
            {{ rider?.name }}<br />
            Valor: {{ rider?.value }}.000 $<br />
            <button @click="add(rider)" class="btn btn-primary mb-2 mt-3">
              Añadir
            </button>
          </li>
        </ul>
      </div>
      <div v-if="storeTeams.userTeamMGP.length === 3" class="box">
        <h3 class="box-title">Mi equipo Moto GP</h3>
        <span>Puntuación total: {{ totalPoint }}</span>
        <p v-if="storeTeams.isLoading">Cargando pilotos</p>
        <ul v-else class="list-group">
          <li
            class="list-group-item"
            v-for="(rider, index) in storeTeams.userTeamMGP"
            :key="index"
          >
            {{ rider?.name }}<br />
            Puntuación: {{ rider?.result.points }}<br />
            Valor: {{ rider?.value }}.000 $<br />
          </li>
        </ul>
      </div>
    </div>
    <div >
      <h1 class="title1">Pilotos moto 2</h1>
      <div v-if="storeTeams.userTeamM2.length === 0" class="box">
        <h3 class="box-title">Moto 2</h3>
        <p v-if="storeTeams.isLoading">Cargando pilotos</p>
        <ul v-else class="list-group">
          <li
            class="list-group-item"
            v-for="(rider, index) in storeTeams.ridersMoto2"
            :key="index"
          >
            {{ rider?.name }}<br />
            Valor: {{ rider?.value }}.000 $<br />
            <button @click="add(rider)" v-if="storeTeams.userTeamMGP.length > 0 " class="btn btn-primary mb-2 mt-3">
              Añadir
            </button>
          </li>
        </ul>
      </div>

      <div v-if="storeTeams.userTeamM2.length === 3" class="box">
        <h3 class="box-title">Mi equipo Moto 2</h3>
        <span>Puntuación total: {{ totalPoint }}</span>
        <p v-if="storeTeams.isLoading">Cargando pilotos</p>
        <ul v-else class="list-group">
          <li
            class="list-group-item"
            v-for="(rider, index) in storeTeams.userTeamM2"
            :key="index"
          >
            {{ rider?.name }}<br />
            Puntuación: {{ rider?.result.points }}<br />
            Valor: {{ rider?.value }}.000 $<br />
          </li>
        </ul>
      </div>
    </div>

    <!-- @@@@@@@@@@@@@@@@ -->

    <div >
      <h1 class="title1">Pilotos moto 3</h1>
      <div v-if="storeTeams.userTeamM3.length === 0" class="box">
        <h3 class="box-title">Moto 3</h3>
        <p v-if="storeTeams.isLoading">Cargando pilotos</p>
        <ul v-else class="list-group">
          <li
            class="list-group-item"
            v-for="(rider, index) in storeTeams.ridersMoto3"
            :key="index"
          >
            {{ rider?.name }}<br />
            Valor: {{ rider?.value }}.000 $<br />
            <button @click="add(rider)" v-if="storeTeams.userTeamMGP.length > 0 && storeTeams.userTeamM2.length > 0" class="btn btn-primary mb-2 mt-3">
              Añadir
            </button>
          </li>
        </ul>
      </div>
      <div v-if="storeTeams.userTeamM3.length === 3" class="box">
        <h3 class="box-title">Mi equipo Moto 3</h3>
        <span>Puntuación total: {{ totalPoint }}</span>
        <p v-if="storeTeams.isLoading">Cargando pilotos</p>
        <ul v-else class="list-group">
          <li
            class="list-group-item"
            v-for="(rider, index) in storeTeams.userTeamM3"
            :key="index"
          >
            {{ rider?.name }}<br />
            Puntuación: {{ rider?.result.points }}<br />
            Valor: {{ rider?.value }}.000 $<br />
          </li>
        </ul>
      </div>
    </div>

    <!-- @@@@@@@@@@@@@@@@ -->
    <div>
      <h1 class="title1">Tu equipo</h1>
      <h2 >Dineros {{ dollars }}.000 cucas.</h2>
      <h3>Puntuación de tu equipo: {{ totalPoint }}</h3>
      <div class="box">
        <h3 v-if="storeTeams.userTeamMGP.length === 0" class="box-title">
          MotoGP
        </h3>
        <ul class="list-group">
          <li
            class="list-group-item"
            v-for="(rider, index) in userTeam"
            :key="index"
          >
            {{ rider?.name }} <br> {{ rider?.value }}.000 <br />
            <button @click="remove(rider)" class="btn btn-danger mb-2 mt-3">
              Eliminar
            </button>
          </li>
        </ul>
        <button @click="create">Crear equipo</button>
      </div>

     <button v-if="auth.currentUser.uid == 'BHneJ9GYwhXDqITGfr3aeyD2zAB3'" @click="resetDb">Reiniciar equipos y dineros</button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useTeams } from "../stores/teams";
import {useUserStore} from "../stores/user"
import { auth } from "../Services/FirebaseService";

const storeTeams = useTeams();
const dollars = ref(0);

const userTeam = storeTeams.userTeam;
const totalPoint = ref(0);
const listPoints = [];
const suma = (rider) => {
  listPoints.push(rider.value);
  totalPoint.value = rider.value;
  listPoints.reduce((a, b) => {
    return (totalPoint.value = a + b);
  });
};
const add = (rider) => {
  storeTeams.addRiderTeam(rider);
  if (storeTeams.confirmAddRiderTeam) {
    suma(rider);
  }
  dollars.value = storeTeams.dollars
};
const remove = (rider) => {
  let element = rider;
  let index = userTeam.indexOf(element);
  totalPoint.value -= rider.value;
  storeTeams.removeRiderTeam(rider);
  listPoints.splice(index, 1);
  dollars.value = storeTeams.dollars
};
const create = () => {
  if (storeTeams.userTeamMGP.length === 0 && storeTeams.userTeam[0].category == 'MotoGP') {
    storeTeams.createTeamMGP();
    
  }
  if (
    storeTeams.userTeamMGP.length === 3 &&
    storeTeams.userTeamM2.length === 0 && storeTeams.userTeam[0].category == 'Moto2'
    ) {
    console.log("2")
    storeTeams.createTeamM2();
  }
  if (
    storeTeams.userTeamMGP.length === 3 &&
    storeTeams.userTeamM2.length === 3 &&
    storeTeams.userTeamM3.length === 0 && storeTeams.userTeam[0].category == 'Moto3'
    ) {
      console.log("3")
      storeTeams.createTeamM3();
  }
};

const resetDb = ()=>{
  console.log("RESET, No en verdad no, hay que hacer esta función")
} 

onMounted( () => {
  function ejecutarFunciones() {
    if (storeTeams.userDbData.length === 0) {
      storeTeams.getUsers();
      
    }
    if (storeTeams.ridersMoto3.length === 0) {
      storeTeams.getRidersMoto3();
    }
    if (storeTeams.ridersMoto2.length === 0) {
       storeTeams.getRidersMoto2();
      }
    if (storeTeams.ridersMotoGp.length === 0) {
       storeTeams.getRidersMotoGp();
    }
    if (storeTeams.userTeamMGP.length === 0) {
       storeTeams.getTeamMGP();
      }
    if (storeTeams.userTeamM2.length === 0) {
      storeTeams.getTeamM2();
    }
    if (storeTeams.userTeamM3.length === 0) {
      storeTeams.getTeamM3();
    }   
    
  }
  setTimeout(ejecutarFunciones, 1000)
  window.addEventListener("scroll", () => {
    if (dollars.value === 0) {
      dollars.value = storeTeams.userDbData[0]?.money;
      
    }
  });
  window.addEventListener("click", () => {
    if (dollars.value === 0) {
      dollars.value = storeTeams.userDbData[0]?.money;
      
    }
   

    
  });  
});
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  .title1 {
    border-bottom: 3px solid gray;
  }

  .box {
    padding: 1rem;
    border-right: 1px solid gray;
    border-left: 1px solid gray;

    .box-title {
      background-color: orange;
      border-radius: 5px;
      padding: 10px;
      place-items: center;
      color: black;
    }
    .list-group {
      display: block;
      text-align: center;

      .list-group-item {
        border: 2px solid rgb(0, 0, 0) !important;
        list-style: none;
      }
    }
  }
}
</style>
