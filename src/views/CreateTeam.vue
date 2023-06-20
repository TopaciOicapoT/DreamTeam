<template>
  <a-layout-content v-if="!storeTeams.isLoading" class="content">
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
        <span>Puntuación total: {{ totalPoint }}</span>
        <p v-if="storeTeams.isLoading">Cargando pilotos</p>
        <!-- <ul v-else class="list-group">
          <li
            class="list-group-item"
            v-for="(rider, index) in storeTeams.userTeamMGP"
            :key="index"
          >
            {{ rider?.name }}<br />
            Puntuación: {{ rider?.result.points }}<br />
            Valor: {{ rider?.value }}.000 $<br />
          </li>
        </ul> -->

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
            :extra="`Precio: ${rider?.value}.000 $`"
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
  </a-layout-content>
  <div class="myTeam">
    <h1 class="title1">Tu equipo</h1>
    <h2>Fondos: {{ dollars }}.000 $</h2>
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
                :content="`Puntuación: ${rider?.result.points}`"
                style="max-width: 120px"
              />
              <a-button
                type="primary"
                shape="circle"
                @click="remove(rider)"
              >
                Eliminar
              </a-button>
            </a-space>
          </a-card>
        </div>
        <a-popconfirm
        title="¿Estas seguro de que este es tu equipo?, una vez creado no podras modificarlo"
          ok-text="Yes"
          cancel-text="No"
          @confirm="confirm"
          @cancel="cancel"
        >
          <a
            v-if="
              storeTeams.userTeamMGP.length < 3 &&
              storeTeams.teamMGP.length == 3
            "
            href="#"
            >Crear equipo
          </a>
        </a-popconfirm>
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
                :content="`Puntuación: ${rider?.result.points}`"
                style="max-width: 120px"
              />
              <a-button
                type="primary"
                shape="circle"
                @click="remove(rider)"
                
              >
                Eliminar
              </a-button>
            </a-space>
          </a-card>
        </div>
        <a-popconfirm
        title="¿Estas seguro de que este es tu equipo?, una vez creado no podras modificarlo"
          ok-text="Yes"
          cancel-text="No"
          @confirm="confirm"
          @cancel="cancel"
        >
          <a
            v-if="
              storeTeams.userTeamM2.length < 3 && storeTeams.teamM2.length == 3
            "
            href="#"
            >Crear equipo
          </a>
        </a-popconfirm>
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
                :content="`Puntuación: ${rider?.result.points}`"
                style="max-width: 120px"
              />
              <a-button
                type="primary"
                shape="circle"
                @click="remove(rider)"
                
              >
                Eliminar
              </a-button>
            </a-space>
          </a-card>
        </div>
        <a-popconfirm
          title="¿Estas seguro de que este es tu equipo?, una vez creado no podras modificarlo"
          ok-text="Yes"
          cancel-text="No"
          @confirm="confirm"
          @cancel="cancel"
        >
          <a
            v-if="
              storeTeams.userTeamM3.length < 3 && storeTeams.teamM3.length == 3
            "
            href="#"
            >Crear equipo
          </a>
        </a-popconfirm>
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
import { defineComponent } from "vue";
import { message } from "ant-design-vue";

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

const confirm = () => {
  create()
  message.success("Este equipo sera guardado ");
};
const cancel = (e) => {
  console.log(e);
  message.error("Piensalo bien mi pana");
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

      .rider-card{
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
