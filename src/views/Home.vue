<template>
  <div class="body-container">
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
  </div>
</template>
<script setup>
import "../assets/styles.scss";
import { useTeams } from "../stores/teams.js"
import { useUserStore } from "../stores/user"

const dbTeams = useTeams()
const userStore = useUserStore()
dbTeams.getUsers()
dbTeams.updateUserPoints();



</script>

<style lang="scss" scoped>

.body-container{
  display: grid;
  place-items: center;
  border-radius: 10%;
  background-image: url(/img/gifMotoGp.gif);
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 400px;
  // margin: 2rem;
  // padding: 1rem;
 
  
  .title{
    border-radius: 10%;
    width: 40%;
    text-align: center;
    color: rgb(206, 206, 206);
    background: black;
    text-shadow: 2px 2px 2px rgb(115, 114, 114);
  }
  .grid-container {
    display: grid;
    place-content: center;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 15px;
    padding: 1rem;
    margin: 15px;
  }
  
  .card {
  width: 100%;
  }
  .rider-card {
    text-align: center;
    padding: 5px;
    margin: 10px;
    &__content{
      display: grid;
      place-items: center;
      margin: 1rem;
      .photo{
        margin: 1rem;
        padding: 5px;
      }
    }
  }
}
</style>
