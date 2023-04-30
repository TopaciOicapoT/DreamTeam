<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <input v-model="name" type="text" placeholder="Piloto"> <br>
            <input v-model="points" type="number" placeholder="Puntuación">
            <br>
            <input v-model="active" type="checkbox">Activo <br>
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
            {{ rider.rider }} {{ rider.position }}ª  -{{ rider.active }} <br>
            <button class="btn btn-secondary mb-2 mt-3">Modificar</button>
          </li>
        </ul>
      </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import {useTeams} from '../stores/teams'

const storeTeams = useTeams()
const ridersList = storeTeams.riders
const name = ref('')
const points = ref(null)
const active = ref(false)
const rider = {
    position: null,
    rider:'',
    points:null,
    active: false
}
const handleSubmit = () => {
    
    rider.value ={
    position: ridersList.length+1,
    rider:name.value,
    points:points.value,
    active: active.value
    }
    const Position = () => {
        ridersList.forEach((e) =>{
            if (rider.value.points > e.points) {
                e.position++
                rider.value.position--
                
            } else {
                console.log("te quedas ahi")

            }
            // console.log(e)
            // console.log(rider.value)
        })
    }
    Position()
    
    return storeTeams.addRider(rider.value)

}
onMounted(() => {
    ridersList.sort(function (a, b) {
      return a.position - b.position;
    });

})

</script>

<style lang="scss" scoped>
      .box {
    padding: 1rem;
    border-right: 1px solid gray;
    border-left: 1px solid gray;
    .list-group{
      
      .list-group-item{
        border: 2px solid rgb(0, 0, 0) !important;
      }
    }
  }
</style>