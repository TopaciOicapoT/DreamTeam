<template>
  <div>
    <h1 class="title1">Pilotos</h1>
    <div>
      <div class="box">
        <h3 class="box-title">MotoGP</h3>
        <ul class="list-group">
          <li
            class="list-group-item"
            v-for="(rider, index) in riders"
            :key="index"
          >
            {{ rider.rider }} {{ rider.position }}ª <br>
            <button class="btn btn-primary mb-2 mt-3">Añadir</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTeams } from "../stores/teams";

const storeTeams = useTeams();
const riders = storeTeams.riders;
riders.sort(function (a, b) {
  return a.position - b.position;
});
</script>

<style lang="scss" scoped>
.title1 {
  border-bottom: 3px solid gray;
}

  .box {
    padding: 1rem;
    border-right: 1px solid gray;
    border-left: 1px solid gray;

    .box-title{
      
    }
    .list-group{
      
      .list-group-item{
        border: 2px solid rgb(0, 0, 0) !important;
      }
    }
  }

</style>
