<template>
  <h1 class="title1">DREAM TEAM</h1>
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
</template>
<script setup>
import "../assets/styles.scss";
import { useTeams } from "../stores/teams.js"

const dbTeams = useTeams()
dbTeams.getUsers()
dbTeams.updateUserPoints();



</script>

<style lang="scss" scoped>

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 15px;
}

.card {
 max-width: 300px;
 min-width: 150px;
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
