<template>
    <h1 class="title1">DREAM TEAM</h1>
    <div class="homeBox">
        <div class="box">
            <h3>Clasificación motoGP</h3>
            <ul class="list-group">
            <li class="list-group-item" >{{ totalPoint }}</li>
        </ul>
        </div>
        <div class="box">
            <h3>Clasificación moto 2</h3>
        </div>
        <div class="box">
            <h3>Clasificación moto 3</h3>
        </div>
    </div>


</template>

<script setup>
import '../assets/styles.scss'
import { onMounted, ref } from 'vue';
import { useTeams } from "../stores/teams";
const storeTeams = useTeams();

const userTeam = storeTeams.userTeam;
const totalPoint = ref(0);
const suma = () => {
    userTeam.forEach((rider) =>{
        totalPoint.value += rider.newPoints
    })
}
onMounted(() => {
    suma()
})
</script>

<style lang="scss" scoped>

.title1{
  border-bottom: 3px solid gray;
}
.homeBox{
  display: flex;
  place-items: center;
  justify-content: space-around;
  padding: 1rem;
  border-right: 1px solid gray;
  border-left: 1px solid gray;
  .box{
    padding: 1rem;
    border-right: 1px solid gray;
    border-left: 1px solid gray;
  }
}
</style>

