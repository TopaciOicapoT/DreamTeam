<template>
      <div class="box">
        <h3 v-if="storeTeams.userTeamMGP.length === 0" class="box-title">
          {{ categoryTeam }}
        </h3>

        <div v-for="(rider, index) in actualTeam" :key="index">
          <a-card
            style="display: block"
            :title="rider?.name"
            size="middle"
            class="rider-card"
          >
            <a-space size="middle" class="card-text">
              <a-typography-text
                ellipsis
                :content="`Precio: ${rider?.value}.000 $`"
                style="max-width: 120px"
              />
              <a-button type="primary" shape="circle" @click="remove(rider)">
                Eliminar
              </a-button>
            </a-space>
          </a-card>
        </div>
      </div>
</template>

<script setup>
import { useTeams } from "../stores/teams";
const storeTeams = useTeams();

defineProps({
    categoryTeam: String,
    actualTeam: Array
})


const remove = (rider) => {
  storeTeams.removeRiderTeam(rider);
};

</script>

<style lang="scss" scoped>
.box {
      padding: 1rem;
      .box-title {
        background-color: rgb(143, 143, 143);
        border-radius: 5px;
        padding: 10px;
        min-width: 150px;
        text-align: center;
        color: black;
        border: 1px solid rgb(6, 0, 0);
      }
      .rider-card{
        border: 1px solid rgb(6, 0, 0);
      }
    }
</style>