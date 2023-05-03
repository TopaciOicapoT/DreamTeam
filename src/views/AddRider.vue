<template>


  <div class="mt-4">
    <form @submit.prevent="handleSubmit">
      <input v-model="name" type="text" placeholder="Piloto" /> <br />
      <input v-model="points" type="number" placeholder="Puntuación" />
      <br />
      <input v-model="active" type="checkbox" />Activo <br />
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
        <button :key="index" v-show="!rider.modifyVisible" @click="desplegar(rider)" class="btn btn-secondary mb-2 mt-3">
          Modificar
        </button>
        <div class="mt-2" v-show="rider.modifyVisible">
          <form @submit.prevent="modify(rider)">
            <input :key="index" v-model="rider.newPoints" type="number" placeholder="Nueva puntuación" />
            <br />
            <input :key="index" v-model="rider.active" type="checkbox" />Activo <br />
            <button @click="remove(rider)" class="btn btn-danger m-2">Eliminar piloto
            </button> 
            <br>
            
              <input v-model="confirmRemove" :key="index" type="checkbox" placeholder="Si">Eliminar 
            
            <br>
            <button class="btn btn-primary m-2" :key="index"  type="submit">Modificar piloto</button>
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
const newPoints = ref(null);
const active = ref(false);
const confirmRemove = ref(false)

const rider = {
  position: null,
  rider: "",
  points: null,
  newPoints:0,
  active: false,
};


const handleSubmit = () => {
  rider.value = {
    position: ridersList.length + 1,
    rider: name.value,
    points: points.value,
    newPoints: newPoints.value ,
    active: active.value,
  };
  const Position = () => {
    ridersList.forEach((e) => {
      if (rider.value.points > e.points) {
        e.position++;
        rider.value.position--;
      } else {
        console.log("te quedas ahi");
      }
    });
  };
  Position();

  return storeTeams.addRider(rider.value);
};

const desplegar = (rider) => {
  rider.modifyVisible = true
  
}

const remove = (rider)=> {
  if (confirmRemove.value) {
    storeTeams.removeRider(rider)
  } else {
    alert("Confirma Eliminar piloto para eliminarlo definitivamente ")
  }
}

const modify = (rider) => {
  newPoints.value = rider.newPoints
  rider.modifyVisible = false
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
