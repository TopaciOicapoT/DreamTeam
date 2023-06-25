<template>


  
  <div
  v-if="
    !loadingPage
  "
    >
      <a-card
        :title="`Puntuación total: ${storeTeams?.userPoints}`"
        class="totalPoints"
        size="middle"
      > 
      </a-card>

    </div>
    <span v-else>Cargando...</span>
  <a-layout-content v-if="!loadingPage" class="content">
    <div class="ridersBox">
      <h1 class="title1">Pilotos moto GP</h1>
      <div v-if="storeTeams.userTeamMGP.length === 0" class="box">
        <h3 class="box-title">MotoGP</h3>
        <p v-if="storeTeams.isLoading">Cargando pilotos</p>
        <div
          v-else
          v-for="(rider, index) in storeTeams.ridersMotoGp"
          :key="index"
        >
          <a-card
            style="display: block"
            :title="rider?.name"
            size="middle"
            class="rider-card"
          >
            <a-space size="middle" class="card-text">
              <a-typography-text
                ellipsis
                :content="`Precio: ${rider?.value}.000 $`"
                style="max-width: 120px"
              />

              <a-button
                type="primary"
                shape="circle"
                size="middle"
                @click="add(rider)"
                v-if="storeTeams.teamMGP.length != 3"
              >
                Añadir
              </a-button>
            </a-space>
          </a-card>
        </div>
      </div>

      <!-- PILOTOS EN EL EQUIPO DEL USUARIO -->
      <div v-if="storeTeams.userTeamMGP.length === 3" class="box">
        <h3 class="box-title">Mi equipo Moto GP</h3>
        <span>Puntuación: {{ storeTeams.teamMgpPoints }}</span>
        <p v-if="storeTeams.isLoading">Cargando pilotos</p>

        <div
          v-else
          v-for="(rider, index) in storeTeams.userTeamMGP"
          :key="index"
        >
          <a-card
            style="display: block"
            :title="rider?.name"
            size="middle"
            class="rider-card"
          >
            <a-space size="middle" class="card-text">
              <a-typography-text
                ellipsis
                :content="`Puntos: ${rider?.result?.points}`"
                style="max-width: 120px"
              />
            </a-space>
          </a-card>
        </div>
      </div>
    </div>
    <div class="ridersBox">
      <h1 class="title1">Pilotos moto 2</h1>
      <div v-if="storeTeams.userTeamM2.length === 0" class="box">
        <h3 class="box-title">Moto 2</h3>
        <p v-if="storeTeams.isLoading">Cargando pilotos</p>
        <div
          v-else
          v-for="(rider, index) in storeTeams.ridersMoto2"
          :key="index"
        >
          <a-card
            style="display: block"
            :title="rider?.name"
            size="middle"
            class="rider-card"
          >
            <a-space size="middle" class="card-text">
              <a-typography-text
                ellipsis
                :content="`Precio: ${rider?.value}.000 $`"
                style="max-width: 120px"
              />

              <a-button
                type="primary"
                shape="circle"
                size="middle"
                @click="add(rider)"
                v-if="storeTeams.teamM2.length != 3"
              >
                Añadir
              </a-button>
            </a-space>
          </a-card>
        </div>
      </div>

      <!-- PILOTOS EN EL EQUIPO DEL USUARIO -->

      <div v-if="storeTeams.userTeamM2.length === 3" class="box">
        <h3 class="box-title">Mi equipo Moto 2</h3>
        <span>Puntuación: {{ storeTeams.teamM2Points }}</span>
        <p v-if="storeTeams.isLoading">Cargando pilotos</p>
        <div
          v-else
          v-for="(rider, index) in storeTeams.userTeamM2"
          :key="index"
        >
          <a-card
            style="display: block"
            :title="rider?.name"
            size="middle"
            class="rider-card"
          >
            <a-space size="middle" class="card-text">
              <a-typography-text
                ellipsis
                :content="`Puntos: ${rider?.result.points}`"
                style="max-width: 120px"
              />
            </a-space>
          </a-card>
        </div>
      </div>
    </div>


    <div class="ridersBox">
      <h1 class="title1">Pilotos moto 3</h1>
      <div v-if="storeTeams.userTeamM3.length === 0" class="box">
        <h3 class="box-title">Moto 3</h3>
        <p v-if="storeTeams.isLoading">Cargando pilotos</p>
        <div
          v-else
          v-for="(rider, index) in storeTeams.ridersMoto3"
          :key="index"
        >
          <a-card
            style="display: block"
            :title="rider?.name"
            size="middle"
            class="rider-card"
          >
            <a-space size="middle" class="card-text">
              <a-typography-text
                ellipsis
                :content="`Precio: ${rider?.value}.000 $`"
                style="max-width: 120px"
              />

              <a-button
                type="primary"
                shape="circle"
                size="middle"
                @click="add(rider)"
                v-if="storeTeams.teamM3.length != 3"
              >
                Añadir
              </a-button>
            </a-space>
          </a-card>
        </div>
      </div>

      <!-- PILOTOS EN EL EQUIPO DEL USUARIO -->

      <div v-if="storeTeams.userTeamM3.length === 3" class="box">
        <h3 class="box-title">Mi equipo Moto 3</h3>
        <span>Puntuación total: {{ storeTeams.teamM3Points }}</span>
        <p v-if="storeTeams.isLoading">Cargando pilotos</p>
        <div
          v-else
          v-for="(rider, index) in storeTeams.userTeamM3"
          :key="index"
        >
          <a-card
            style="display: block"
            :title="rider?.name"
            size="middle"
            class="rider-card"
          >
            <a-space size="middle" class="card-text">
              <a-typography-text
                ellipsis
                :content="`Puntos: ${rider?.result?.points}`"
                style="max-width: 120px"
              />
            </a-space>
          </a-card>
        </div>
      </div>
    </div>
  </a-layout-content>

  <!-- MENU DE CREACIÓN DE EQUIPO -->
  <div
    class="myTeam"
    v-if="
      storeTeams.userTeamMGP.length === 0 &&
      storeTeams.userTeamM2.length === 0 &&
      storeTeams.userTeamM3.length === 0 && 
      loadingPage === false
    "
  >
    <h1 class="title1">Tu equipo</h1>
    <h2>Fondos: {{ storeTeams.dollars }}.000 $</h2>
    <h3>Puntuación de tu equipo: {{ totalPoint }}</h3>
    <div class="box-teams">
      <div class="box">
        <h3 v-if="storeTeams.userTeamMGP.length === 0" class="box-title">
          MotoGP
        </h3>

        <div v-for="(rider, index) in storeTeams?.teamMGP" :key="index">
          <a-card
            style="display: block"
            :title="rider?.name"
            size="middle"
            class="rider-card"
          >
            <a-space size="middle" class="card-text">
              <a-typography-text
                ellipsis
                :content="`Precio: ${rider?.value}.000 $`"
                style="max-width: 120px"
              />
              <a-button type="primary" shape="circle" @click="remove(rider)">
                Eliminar
              </a-button>
            </a-space>
          </a-card>
        </div>
      </div>
      <div class="box">
        <h3 v-if="storeTeams.userTeamM2.length === 0" class="box-title">
          Moto 2
        </h3>
        <div v-for="(rider, index) in storeTeams?.teamM2" :key="index">
          <a-card
            style="display: block"
            :title="rider?.name"
            size="middle"
            class="rider-card"
          >
            <a-space size="middle" class="card-text">
              <a-typography-text
                ellipsis
                :content="`Precio: ${rider?.value}.000 $`"
                style="max-width: 120px"
              />
              <a-button type="primary" shape="circle" @click="remove(rider)">
                Eliminar
              </a-button>
            </a-space>
          </a-card>
        </div>
      </div>
      <div class="box">
        <h3 v-if="storeTeams.userTeamM3.length === 0" class="box-title">
          Moto 3
        </h3>
        <div v-for="(rider, index) in storeTeams?.teamM3" :key="index">
          <a-card
            style="display: block"
            :title="rider?.name"
            size="middle"
            class="rider-card"
          >
            <a-space size="middle" class="card-text">
              <a-typography-text
                ellipsis
                :content="`Precio: ${rider?.value}.000 $`"
                style="max-width: 120px"
              />
              <a-button type="primary" shape="circle" @click="remove(rider)">
                Eliminar
              </a-button>
            </a-space>
          </a-card>
        </div>
      </div>
    </div>
    <div
      v-if="
        storeTeams.teamMgpConfirm &&
        storeTeams.teamM2Confirm &&
        storeTeams.teamM3Confirm
      "
    >
      <a-button type="primary">
        <a-popconfirm
          title="¿Estas seguro de que este es tu equipo?, una vez creado no podras modificarlo"
          ok-text="Yes"
          cancel-text="No"
          @confirm="confirm"
          @cancel="cancel"
        >
          <a href="#">Crear equipo </a>
        </a-popconfirm>
      </a-button>
    </div>
  </div>
  <form @submit.prevent="resetDb" style="margin-top: 5rem">
    <button type="submit">Reiniciar equipos y dineros</button>
  </form>
</template>

<script setup>
import { computed, onBeforeMount, onMounted, ref } from "vue";
import router from "../router/routes";
import { useTeams } from "../stores/teams";
import { message } from "ant-design-vue";
const loadingPage = ref(true)
const storeTeams = useTeams();
storeTeams.getUsers();
storeTeams.getTeamMGP();
storeTeams.getTeamM2();
storeTeams.getTeamM3();
storeTeams.getRidersMotoGp();
storeTeams.getRidersMoto2();
storeTeams.getRidersMoto3();
storeTeams.updateUserPoints();
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
};
const remove = (rider) => {
  let element = rider;
  let index = storeTeams.teamMGP.indexOf(element);
  totalPoint.value -= rider.value;
  storeTeams.removeRiderTeam(rider);
  listPoints.splice(index, 1);
};

const confirm =  (() => {
  try {
    storeTeams.createTeamMGP();
    storeTeams.createTeamM2();
    storeTeams.createTeamM3();
    message.success("Este equipo sera guardado ");
    router.push("/confirmcreateteam");
  } catch (error) {
    message.error("Parece que algo ha salido mal, intentalo mas tarde");
  }
});
const cancel = (e) => {
  message.error("Piensalo bien mi pana");
};

const resetDb = () => {
  storeTeams.resetTeamsDb();
  setTimeout(() => {
        location.reload()
    }, 2500);
};

const confirmLoading = ()=>{
  loadingPage.value = false

}
const getRiders = ()=>{
  storeTeams.getUsers();
  storeTeams.getTeamMGP();
  storeTeams.getTeamM2();
  storeTeams.getTeamM3();
  storeTeams.getRidersMotoGp();
storeTeams.getRidersMoto2();
storeTeams.getRidersMoto3();
storeTeams.updateUserPoints();
}

  setTimeout(getRiders, 800)
  setTimeout(confirmLoading, 2000)

</script>

<style lang="scss" scoped>
.totalPoints {
  text-align: center;
}
.content {
  display: flex;
  background-color: rgb(221, 238, 252);
  border-radius: 5px;
  max-height: 600px;
  min-width: 390px;
  text-align: center;
  overflow: auto;
  .ridersBox {
    width: 100%;
    .title1 {
      border-bottom: 3px solid gray;
    }

    .box {
      padding: 1rem;
      .box-title {
        background-color: rgb(143, 143, 143);
        border-radius: 5px;
        padding: 10px;
        // place-items: center;
        text-align: center;
        color: black;
      }

      .rider-card {
        display: flex;
        place-content: center;
        text-align: center;
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
  overflow: auto;
  text-align: center;
  margin: 2rem;
  .box-teams {
    display: flex;
    place-content: center;
    padding: 2rem;
    margin: 2rem;
    .box {
      padding: 1rem;
      .box-title {
        background-color: rgb(143, 143, 143);
        border-radius: 5px;
        padding: 10px;
        min-width: 150px;
        text-align: center;
        color: black;
      }
    }
  }
}
</style>
