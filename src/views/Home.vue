<template>
  <!-- <div class="body-container">
    <h1 class="title">DREAM TEAM</h1>

    <div v-if="!dbTeams.isLoading" class="grid-container">
      <div v-for="(user, index) in dbTeams.allUsersDb" :key="index" class="card">
        <a-card
        style="display: block"
        :title="`🏍️ ${user?.name} 🏍️`"
        size="small"
        class="rider-card"
        
        >
        <div class="rider-card__content">
          <a-avatar class="photo" :src="user?.photoURL" :size="80" ></a-avatar>
          {{ `Puntuación: ${user?.totalPoints}` }}

        </div>
        </a-card>
      </div>
    </div>
  </div> -->
</template>
<script setup>
import { useTeams } from "../stores/teams.js"
import { useUserStore } from "../stores/user"

const dbTeams = useTeams()
const userStore = useUserStore()
dbTeams.getUsers()
dbTeams.updateUserPoints();



</script>

<style lang="scss" scoped>
</style>
