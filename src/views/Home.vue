<template>
  <h1 class="title1">DREAM TEAM</h1>
  <div v-if="!dbTeams.isLoading" class="grid-container">
    <div v-for="(rider, index) in dbTeams.ridersMotoGp" :key="index" class="card">
      <a-card
        style="display: block"
        :title="rider?.name"
        size="small"
        class="rider-card"
        :extra="`Value: ${rider?.value}`"
      >
        <a-row>
          <a-col :span="6">
            <a-avatar shape="square" :src="rider?.photo" :size="25"> </a-avatar>
          </a-col>
          <a-col :span="16">
            <a-space size="small" class="card-text">
              <a-typography-text
                ellipsis
                :content="`Country: ${rider?.nationality}`"
                style="max-width: 120px"
              />
              <a-typography-text
                ellipsis
                :content="`Team: ${rider?.team.name}`"
                style="max-width: 120px"
              />
            </a-space>
          </a-col>
        </a-row>
      </a-card>
    </div>
  </div>
</template>
<script setup>
import "../assets/styles.scss";
import { useTeams } from "../stores/teams.js"

const dbTeams = useTeams()
dbTeams.getRidersMotoGp()


</script>

<style lang="scss" scoped>

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 15px;
}

.card {
  width: 100%;
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
