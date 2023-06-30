<template>
 <div class="ridersBox">
      <h1 class="title1">{{ tittleRiders }}</h1>
      <div v-if="storeTeams.userTeamMGP.length === 0" class="box">
        <h3 class="box-title">{{ category }}</h3>
        <p v-if="storeTeams.isLoading">Cargando pilotos</p>
        <div
          v-else
          v-for="(rider, index) in  ridersList "
          :key="index"
        >
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

              <a-button
                type="primary"
                shape="circle"
                size="middle"
                @click="add(rider)"
                v-if="categoryTeam.length != 3"
              >
                Añadir
              </a-button>
            </a-space>
          </a-card>
        </div>
      </div>
    </div>
</template>

<script setup>
import { useTeams } from "../stores/teams";
const storeTeams = useTeams();


defineProps({
    tittleRiders: String,
    category: String,
    ridersList: Array,
    categoryTeam: Array

})

const add = (rider) => {
  storeTeams.addRiderTeam(rider);

};


</script>

<style lang="scss" scoped>
 .ridersBox {
    width: 100%;
    .title1 {
      border-bottom: 3px solid gray;
    }

    .box {
      padding: 1rem;
      .box-title {
        background-color: rgb(143, 143, 143);
        border-radius: 5px;
        padding: 10px;
        text-align: center;
        color: black;
      }

      .rider-card {
        display: flex;
        place-content: center;
        text-align: center;
      }
    }
  }

</style>