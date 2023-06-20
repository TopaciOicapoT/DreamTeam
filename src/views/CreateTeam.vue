<template>
  <div v-if="!storeTeams.isLoading" class="content">
    <div class="ridersBox">
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
            <button
              @click="add(rider)"
              v-if="storeTeams.teamMGP.length != 3"
              class="btn btn-primary mb-2 mt-3"
            >
              Añadir
            </button>
          </li>
        </ul>
        <button>Añadir al equipo</button>
      </div>

      <!-- PILOTOS EN EL EQUIPO DEL USUARIO -->
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
    <div class="ridersBox">
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
            <button
              @click="add(rider)"
              v-if="storeTeams.teamM2.length != 3"
              class="btn btn-primary mb-2 mt-3"
            >
              Añadir
            </button>
          </li>
        </ul>
      </div>

      <!-- PILOTOS EN EL EQUIPO DEL USUARIO -->

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

    <div class="ridersBox">
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
            <button
              @click="add(rider)"
              v-if="storeTeams.teamM3.length != 3"
              class="btn btn-primary mb-2 mt-3"
            >
              Añadir
            </button>
          </li>
        </ul>
      </div>

      <!-- PILOTOS EN EL EQUIPO DEL USUARIO -->

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
  </div>
  <div class="myTeam">
    <h1 class="title1">Tu equipo</h1>
    <h2>Dineros {{ dollars }}.000 cucas.</h2>
    <h3>Puntuación de tu equipo: {{ totalPoint }}</h3>
    <div class="box-teams">
      <div class="box">
        <h3 v-if="storeTeams.userTeamMGP.length === 0" class="box-title">
          MotoGP
        </h3>
        <ul class="list-group">
          <li
            class="list-group-item"
            v-for="(rider, index) in storeTeams?.teamMGP"
            :key="index"
          >
            {{ rider?.name }} <br />
            {{ rider?.value }}.000 <br />
            <button @click="remove(rider)" class="btn btn-danger mb-2 mt-3">
              Eliminar
            </button>
          </li>
        </ul>
        <button v-if="storeTeams.userTeamMGP.length < 3" :disabled="storeTeams.teamMGP.length < 3" @click="create">
          Crear equipo
        </button>
      </div>
      <div class="box">
        <h3 v-if="storeTeams.userTeamMGP.length === 0" class="box-title">
          Moto 2
        </h3>
        <ul class="list-group">
          <li
            class="list-group-item"
            v-for="(rider, index) in storeTeams?.teamM2"
            :key="index"
          >
            {{ rider?.name }} <br />
            {{ rider?.value }}.000 <br />
            <button @click="remove(rider)" class="btn btn-danger mb-2 mt-3">
              Eliminar
            </button>
          </li>
        </ul>
        <button v-if="storeTeams.userTeamM2.length < 3" :disabled="storeTeams.teamM2.length < 3" @click="create">
          Crear equipo
        </button>
      </div>
      <div class="box">
        <h3 v-if="storeTeams.userTeamMGP.length === 0" class="box-title">
          Moto 3
        </h3>
        <ul class="list-group">
          <li
            class="list-group-item"
            v-for="(rider, index) in storeTeams?.teamM3"
            :key="index"
          >
            {{ rider?.name }} <br />
            {{ rider?.value }}.000 <br />
            <button @click="remove(rider)" class="btn btn-danger mb-2 mt-3">
              Eliminar
            </button>
          </li>
        </ul>
        <button v-if="storeTeams.userTeamM3.length < 3" :disabled="storeTeams.teamM3.length < 3" @click="create">
          Crear equipo
        </button>
      </div>
    </div>

    <button
      v-if="auth.currentUser.uid == 'BHneJ9GYwhXDqITGfr3aeyD2zAB3'"
      @click="resetDb"
    >
      Reiniciar equipos y dineros
    </button>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useTeams } from "../stores/teams";
import { useUserStore } from "../stores/user";
import { auth } from "../Services/FirebaseService";

const storeTeams = useTeams();
storeTeams.getUsers();
storeTeams.getTeamMGP();
storeTeams.getTeamM2();
storeTeams.getTeamM3();
storeTeams.getRidersMotoGp();
storeTeams.getRidersMoto2();
storeTeams.getRidersMoto3();
const dollars = ref(0);
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
  dollars.value = storeTeams.dollars;
};
const remove = (rider) => {
  let element = rider;
  let index = storeTeams.teamMGP.indexOf(element);
  totalPoint.value -= rider.value;
  storeTeams.removeRiderTeam(rider);
  listPoints.splice(index, 1);
  dollars.value = storeTeams.dollars;
};
const create = () => {
  if (
    storeTeams.userTeamMGP.length === 0 &&
    storeTeams.teamMGP[0].category == "MotoGP"
  ) {
    storeTeams.createTeamMGP();
  }
  if (
    storeTeams.userTeamMGP.length === 3 &&
    storeTeams.userTeamM2.length === 0 &&
    storeTeams.teamM2[0].category == "Moto2"
  ) {
    console.log("2");
    storeTeams.createTeamM2();
  }
  if (
    storeTeams.userTeamMGP.length === 3 &&
    storeTeams.userTeamM2.length === 3 &&
    storeTeams.userTeamM3.length === 0 &&
    storeTeams.teamM3[0].category == "Moto3"
  ) {
    console.log("3");
    storeTeams.createTeamM3();
  }
};

const resetDb = () => {
  storeTeams.resetTeamsDb();
};

onMounted(() => {
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
  max-height: 800px;
  min-width: 390px;
  overflow: auto;
  .ridersBox {
    min-width: 200px;
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
}
.myTeam {
  display: grid;
  place-content: center;
  margin: 2rem;
  .box-teams {
    display: flex;
    place-content: center;
    padding: 2rem;
    margin: 2rem;
  }
}
</style>
