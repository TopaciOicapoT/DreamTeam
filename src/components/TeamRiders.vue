<template>
     <div class="ridersBox">     
            <h3 class="box-title">{{teamTittle}}</h3>
            <a-card
            style="display: block"
            :title="`Puntuanción: ${teamPoints}`"
            size="middle"
            class="rider-card"
          ></a-card>
        <div
          v-for="(rider, index) in teamRidersList"
          :key="index"
        >
          <a-card
            style="display: block"
            :title="`🏍️ ${rider?.name} 🏍️`"
            size="middle"
            class="rider-card"
          >
            <a-space size="middle" class="card-text">
              <a-typography-text
                ellipsis
                :content="`🔼 Puntos: ${rider?.result?.points} 🔼`"
                style="max-width: 120px"
              />
            </a-space>
          </a-card>
        </div>
    </div>
</template>

<script setup>

defineProps({
    teamTittle: String,
    teamRidersList: Array,
    teamPoints: Number
})

</script>

<style lang="scss" scoped>


.ridersBox {
    width: 100%;
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
</style>