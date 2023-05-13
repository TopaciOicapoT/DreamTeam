<template>
  <div class="mt-4">
    <form class="formulario" @submit.prevent="handleSubmit">
      <input v-model="name" type="text" placeholder="Piloto" /> <br />
      <input v-model="points" type="number" placeholder="Puntuación" />
      <br />
      <input v-model="active" type="checkbox" /> Activo <br />
      <button type="submit">Crear piloto</button>
    </form>

    <div class="box mt-5">
      <h3 class="box-title">MotoGP</h3>
      <div v-if="!storeTeams.isLoading">
        <ul class="list-group">
          <li
            class="list-group-item"
            v-for="(rider, index) in ridersList"
            :key="index"
          >
            {{ rider.rider.name }} <br />
            {{ rider.rider.position }} <br />
            ID: {{ rider.rider.id }} <br>
            idAdmin: {{ rider.admin }}
            <div v-if="rider.active" class="yes">
              <span>Activo</span>
            </div>
            <div v-else class="no"><span>Inactivo</span> <br /></div>
            <button
              :key="index"
              v-show="!rider.modifyVisible"
              @click="desplegar(rider)"
            >
              Modificar
            </button>
            <div v-show="rider.modifyVisible">
              <form @submit.prevent="modify(rider)">
                <button @click.prevent="remove" class="btn btn-danger m-2">
                  Eliminar piloto
                  <br />
                </button>
                <div v-show="confirmRemove" class="container-sm">
                  <h2>¿Estas seguro?</h2>
                  <button
                    class="btn btn-primary m-2"
                    type="button"
                    @click="ocultRemove"
                  >
                    No
                  </button>
                  <button
                    class="btn btn-danger m-2"
                    type="button"
                    @click="storeTeams.removeRider(rider.id)"
                    
                  >
                    Si
                  </button>
                </div>
                <br />
                <button @click="ocultar(rider)" class="btn btn-primary m-2" :key="index" type="button">
                  Aceptar
                </button>
              </form>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <button @click="padentro">Llenar base de datos</button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useTeams } from "../stores/teams";
import {dataRiders} from '../test/const'
// import {useRoute} from 'vue-router'
// const route = useRoute()
// console.log(route.params)
const storeTeams = useTeams();
const ridersList = storeTeams.allRiders;

const name = ref("");
const points = ref(null);
const active = ref(false);
const newPointsValue = ref(null);
const confirmRemove = ref(false);

const rider = ref({
  id: null,
  position: null,
  rider: "",
  points: null,
  newPoints: 0,
  active: false,
  addButtonVisible: true,
  modifyVisible: false,
  team: "",
  picture: "",
  country: "",
  description: "",
});


const handleSubmit = () => {
  newPointsValue.value = null;
  rider.value = {
    position: ridersList.length + 1,
    rider: name.value,
    points: points.value,
    newPoints: newPointsValue.value,
    active: active.value,
    addButtonVisible: true,
    modifyVisible: false,
  };

  name.value = "";
  points.value = null;
  active.value = false;
  storeTeams.addRider(rider.value);
};

const desplegar = (rider) => {
  newPointsValue.value = null;
  ridersList.forEach((e) => {
    e.modifyVisible = false;
    console.log(e);
  });
  rider.modifyVisible = true;
};

const remove = () => {
  confirmRemove.value = true;
};
const ocultRemove = () => {
  confirmRemove.value = false;
  console.log("first")
};
const ocultar = (rider)=>{
  newPointsValue.value = null;
  rider.modifyVisible = false;
}
const Riders = dataRiders

const padentro = async() =>{
  Riders.forEach( async(rider)=>{
    await storeTeams.updateRiders(rider)
    
  })
}




onMounted(() => {
  storeTeams.getAllRiders();
  storeTeams.allRiders.sort(function (a, b) {
    return a.position - b.position;
  });
});
</script>

<style lang="scss" scoped>
.formulario{
  color: white;
}
.box {
  padding: 1rem;
  border-right: 1px solid gray;
  border-left: 1px solid gray;
  .list-group {
    .list-group-item {
      border: 2px solid rgb(0, 0, 0) !important;

      .inputModifi {
        color: white;
      }

      .yes {
        padding: 2px;
        color: rgb(255, 255, 255);
        background-color: rgb(9, 70, 9);
      }
      .no {
        padding: 2px;
        color: rgb(255, 255, 255);
        background-color: red;
      }
    }
  }
}
</style>
