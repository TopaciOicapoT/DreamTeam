<template>
  <h1 class="title1">DREAM TEAM</h1>
  <div v-if="visible" class="grid-container">
    <div v-for="(rider, index) in ridersMgp" :key="index" class="card">
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
              <a-typography-text
                ellipsis
                :content="`Country: ${rider?.nationality}`"
                style="max-width: 120px"
              />
              <a-typography-text
                ellipsis
                :content="`Team: ${rider?.team.name}`"
                style="max-width: 120px"
              />
            </a-space>
          </a-col>
        </a-row>
      </a-card>
    </div>
  </div>
</template>
<script setup>
import { useDocument } from 'vuefire'
import { doc } from 'firebase/firestore'
import "../assets/styles.scss";
import { useCollection } from 'vuefire'
import { collection } from 'firebase/firestore'
import { useFirestore } from 'vuefire'
import { useTeams } from "../stores/teams.js"
import { summaryMotoGp } from "../Services/FirebaseService"
import { onMounted, ref } from 'vue';

const dbTeams = useTeams()
const db = useFirestore()
const visible = ref(false)
const ridersMgp = ref("0")
const getMGP = async ()=>{
  ridersMgp.value = await summaryMotoGp.data.value.stage.competitors
  
}


onMounted(() => {
  function ejecutarFunciones() {
    if(ridersMgp.value === "0"){
      getMGP()
      visible.value = true
  
    }
  }

  setTimeout(ejecutarFunciones, 1000)
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
