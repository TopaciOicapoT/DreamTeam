<template>
    <div>

      <button @click="padentro">Actuallizar pilotos</button>
    </div>

    <div v-if="!ridersStore.isLoading" class="grid-container">
    <div v-for="(rider, index) in storeTeams.allRiders" :key="index" class="card">
      <a-card
        style="display: block"
        :title="rider?.name"
        size="small"
        class="rider-card"
        :extra="`Value: ${rider?.value}`"
      >
        <a-row>
          <a-col :span="6">
            <a-avatar shape="square" :src="rider?.photo" :size="25"> </a-avatar>
          </a-col>
          <a-col :span="16">
            <a-space size="small" class="card-text">
              <a-typography-text>Age {{ rider?.age }}</a-typography-text>
              <a-typography-text>Country {{ rider?.country }}</a-typography-text>
              <a-typography-text
                ellipsis
                :content="`Country: ${rider?.country}`"
                style="max-width: 120px"
              />
              <a-typography-text
                ellipsis
                :content="`Team: ${rider?.team}`"
                style="max-width: 120px"
              />
            </a-space>
          </a-col>
        </a-row>
      </a-card>
    </div>
  </div>
  <div v-else>
    <a-card loading="true" style="display: block"> </a-card>
  </div>

</template>

<script setup>
import { onMounted, ref } from "vue";
import { useTeams } from "../stores/teams";
import { useRiders } from "../stores/riders";

import { doc, setDoc } from 'firebase/firestore'
import { db, todos } from "../Services/FirebaseService";

const storeTeams = useTeams();
const ridersStore = useRiders()

const updateRiders = async() => {

    try {
      ridersStore.riders.forEach( async(rider)=>{
        let rd = {rider} 
        let riderId=rd.rider.id.toString() 

        await setDoc(doc(db, "ridersDataBase", riderId), rd)

      })
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode)
      console.log("upDateRiders ", errorMessage)
    }
    

  } 
const padentro =() =>{
  ridersStore.riders.forEach( async(rider)=>{
    await updateRiders(rider)  
  })
}




onMounted(async() => {
  if (storeTeams.allRiders.length === 0) {
    ridersStore.fetchRiders();
    await storeTeams.getAllRiders(); 
  }
});
</script>

<style lang="scss" scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 15px;
}

.card {
  width: 100%;
}
.card-text {
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-top: 0px;
  font-size: 80%;
  line-height: 1;
}
.rider-card {
  height: 120px;
}
</style>
