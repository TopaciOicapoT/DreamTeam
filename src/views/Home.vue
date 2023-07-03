<template>
  <div class="body-container">
    <h1 class="title">DREAM TEAM</h1>

    <div v-if="!dbTeams.isLoading" class="grid-container">
      <div v-for="(user, index) in dbTeams.allUsersDb" :key="index" class="card">
        <a-card
          style="display: block"
          :title="`🏍️ ${user?.name}`"
          size="small"
          class="rider-card"
  
        >
        {{ `Puntuación: ${user?.totalPoints}` }}
        </a-card>
      </div>
    </div>
  </div>
</template>
<script setup>
import "../assets/styles.scss";
import { useTeams } from "../stores/teams.js"

const dbTeams = useTeams()
dbTeams.getUsers()
dbTeams.updateUserPoints();



</script>

<style lang="scss" scoped>

.body-container{
  border-radius: 10%;
  background-image: url(../../public/img/gifMotoGp.gif);
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 400px;
  
  .title{
    border-radius: 10%;
    text-align: center;
    color: rgb(0, 0, 0);
    text-shadow: 2px 2px 2px rgb(115, 114, 114);
  }
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 15px;
    padding: 4rem;
    margin: 15px;
  }
  
  .card {
   max-width: 300px;
   min-width: 150px;
  }
  .rider-card {
    height: 120px;
  }
}
</style>
