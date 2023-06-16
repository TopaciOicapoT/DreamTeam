<template>
  <div class="content">
    <div>
      <h1 class="title1">Pilotos</h1>
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
      <div v-else class="box" >

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
    <div>
      <h1 class="title1">Pilotos</h1>
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
            <button @click="add(rider)" class="btn btn-primary mb-2 mt-3">
              Añadir
            </button>
          </li>
        </ul>
      </div>
    </div>

    
    <div>
      <h1 class="title1">Tu equipo</h1>
      <h2>Dineros {{ dollars?.money }}.000  cucas.</h2>
      <h3>Puntuación de tu  equipo: {{ totalPoint }}</h3>
      <div class="box">
        <h3 v-if="storeTeams.userTeamMGP.length ===0" class="box-title">MotoGP</h3>
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
        <button @click="storeTeams.createTeamMGP">Crear equipo</button>
      </div>
    </div>

  </div>
</template>

<script setup>
import { onMounted, ref} from "vue";
import { useTeams } from "../stores/teams";


const storeTeams = useTeams();
const dollars = storeTeams.userDbData[0]


console.log(dollars)
const userTeam = storeTeams.userTeam;
const totalPoint = ref(0);
const listPoints = []
const suma = (rider) => {
    listPoints.push(rider.value)
    totalPoint.value = rider.value
    listPoints.reduce((a, b)=> {
     
      return totalPoint.value = a+b;
    })

  }
const add = (rider) =>{
  storeTeams.addRiderTeam(rider)
  dollars = storeTeams.dollars
  if (storeTeams.confirmAddRiderTeam) {
    suma(rider)
  }
}
const remove = (rider) =>{
  let element = rider
  let index = userTeam.indexOf(element)
  totalPoint.value -= rider.value
  storeTeams.removeRiderTeam(rider)
  listPoints.splice(index, 1)
  dollars = storeTeams.dollars
  
}


onMounted(async()=>{
  await storeTeams.getUsers()
  if (storeTeams.ridersMotoGp.length === 0) {  
    await storeTeams.getRidersMotoGp(); 
  }
  if (storeTeams.ridersMoto2.length === 0) {  
    await storeTeams.getRidersMoto2(); 
  }
 
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
        place-items: center;
        color: black;
      }
      .list-group{
        display: block;
        text-align: center;
        
        .list-group-item{
          border: 2px solid rgb(0, 0, 0) !important;
          list-style: none;
        }
      }
    }

}

</style>
