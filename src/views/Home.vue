<template>
  <h1 class="title1">DREAM TEAM</h1>
  <div  v-if="!storeTeams.isLoading" class="grid-container">
    <div v-for="(rider, index) in storeTeams.riders" :key="index" class="card">
      <a-card style="display:block" :title="rider.rider">
        <a-space direction="vertical">
          <a-typography-text>Position: {{rider.position}}</a-typography-text>
          <a-typography-text>Points: {{rider.points}}</a-typography-text>
          <a-typography-text>Active: {{rider.active}}</a-typography-text>
        </a-space>
        <!-- <template>
          <CheckCircleFilled v-if="rider.active" />
          <span v-else>INACTIVO</span>
        </template> -->
      </a-card>
    </div>
  </div>
  <div v-else>
    Cargando...
  </div>
</template>
<script setup>
import '../assets/styles.scss'
import { onMounted, ref } from 'vue';
import { useTeams } from "../stores/teams";
import { CheckCircleFilled } from '@ant-design/icons-vue';
const storeTeams = useTeams();
// const userTeam = storeTeams.userTeam;
// const totalPoint = ref(0);
// const suma = () => {
//     userTeam.forEach((rider) =>{
//         totalPoint.value += rider.newPoints
//     })
// }
onMounted(() => {
    // suma()
    storeTeams.getTodos();
    console.log(storeTeams.riders);
})
</script>

<style lang="scss" scoped>

// .title1{
//   border-bottom: 3px solid gray;
// }
// .homeBox{
//   display: flex;
//   height: 100%;
//   place-items: center;
//   justify-content: space-around;
//   padding: 1rem;
//   border-right: 1px solid gray;
//   border-left: 1px solid gray;
//   overflow: hidden;
//   .box{
//     padding: 1rem;
//     border-right: 1px solid gray;
//     border-left: 1px solid gray;

//   }
// }
.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
  }

  .card {
    width: 100%;
  }
</style>

