<template>
  <div class="mt-4">
    <form @submit.prevent="handleSubmit">
      <input v-model="name" type="text" placeholder="Piloto" /> <br />
      <input v-model="points" type="number" placeholder="Puntuación" />
      <br />
      <input v-model="active" type="checkbox" /> Activo <br />
      <button type="submit">Crear piloto</button>
    </form>

    <div class="box mt-5">
      <h3 class="box-title">MotoGP</h3>
      <ul class="list-group">
        <li
          class="list-group-item"
          v-for="(rider, index) in ridersList"
          :key="index"
        >
          {{ rider.rider }} {{ rider.position }}ª
          <div v-if="rider.active" class="yes">
            <span>Activo</span>
          </div>
          <div v-else class="no"><span>Inactivo</span> <br /></div>
          <button
            :key="index"
            v-show="!rider.modifyVisible"
            @click="desplegar(rider)"
            class="btn btn-secondary mb-2 mt-3"
          >
            Modificar
          </button>
          <div class="mt-2" v-show="rider.modifyVisible">
            <form @submit.prevent="modify(rider)">
              <span> Nombre del piloto: </span>
              <br>
              <input
                :key="index"
                v-model="rider.rider"
                type="text"
                placeholder="Nombre del piloto"
              />
              <br />
              <span> Nueva Puntuación: </span>
              <br />
              <input
                :key="index"
                v-model="newPointsValue"
                type="number"
                placeholder="Nueva puntuación"
              />
              <br />
              <input
                :key="index"
                v-model="rider.active"
                type="checkbox"
              />Activo <br />
              <button @click="remove(rider)" class="btn btn-danger m-2">
                Eliminar piloto
              </button>
              <br />

              <input v-model="confirmRemove" :key="index" type="checkbox" />
              Eliminar

              <br />
              <button
                class="btn btn-primary m-2"
                :key="index"
                type="submit"
              >
                Modificar piloto
              </button>
            </form>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useTeams } from "../stores/teams";

const storeTeams = useTeams();
const ridersList = storeTeams.riders;

const name = ref("");
const points = ref(null);
const newPointsValue = ref(null);
const active = ref(false);
const confirmRemove = ref(false);
const nameRider = ref("");

const rider = ref({
  position: null,
  rider: "",
  points: null,
  newPoints: 0,
  active: false,
  addButtonVisible: true,
  modifyVisible: false,
});

const Position = () => {
    ridersList.forEach((e) => {
      if (e.newPoints===0 || e.newPoints===null ) {
        // console.log(e.newPoints)
        if (rider.value.points > e.points) {
          e.position++;
          rider.value.position--;
        } else {
          // console.log("este lo dejamos ahi");
        }
        
      } else {
        console.log("newPoints")
      }

    });
  };

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

  Position(rider);
  return storeTeams.addRider(rider.value);
};

const desplegar = (rider) => {
  newPointsValue.value=null
  ridersList.forEach((e)=>{

e.modifyVisible = false;
})
  rider.modifyVisible = true;
};

const remove = (rider) => {
  if (confirmRemove.value) {
    storeTeams.removeRider(rider);
  } else {
    alert("Confirma Eliminar piloto para eliminarlo definitivamente ");
  }
};

const modify = (rider) => {
  if (newPointsValue.value>0) {
    rider.newPoints+= newPointsValue.value
  } else {
    rider.newPoints= newPointsValue.value
  }
  Position(rider);
};
onMounted(() => {
  ridersList.sort(function (a, b) {
    return a.position - b.position;
  });
});
</script>

<style lang="scss" scoped>
.box {
  padding: 1rem;
  border-right: 1px solid gray;
  border-left: 1px solid gray;
  .list-group {
    .list-group-item {
      border: 2px solid rgb(0, 0, 0) !important;
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
