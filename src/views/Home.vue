<template>
    <h1 class="title1">DREAM TEAM</h1>
    <div class="homeBox">
        <div class="box">
          <h3 :style="{ margin: '16px 0' }">Clasificación motoGP</h3>
          <a-list size="small" bordered :data-source="ridersList">
            <template #renderItem="{ item }">
              <a-list-item>{{ item.rider }}</a-list-item>
              <CheckCircleFilled :style="{color: item.active ? 'green' :  'red'}" />
            </template>
            <!-- <template #header>
              <div>Todos los pilotos</div>
            </template>
            <template #footer>
              <div>Se acabaron los pilotos</div>
            </template> -->
          </a-list>
            <!-- <h3>Clasificación motoGP</h3>
            <a-list
              itemLayout="horizontal"
              :dataSource="ridersList"
            >
              <a-list-item slot="renderItem" slot-scope="item, index">
                <a-list-item-meta                >
                  <a slot="title">{{item.rider}}</a>
                </a-list-item-meta>
              </a-list-item>
            </a-list> -->
          <!-- <a-list item-layout="horizontal" :data-source="ridersList">
            <a-list-item #renderItem="{ item }">
              <a-list-item-meta
                description="hola"
              >
                <template #title>
                 <span>{{ item.rider }}</span>
                 <check-circle-filled :style="{color: item.active ? 'green' : 'red'}"/>
                </template>
                <template #points>
                 <span>{{ item.newPoints }}</span>
                </template>
                <template #avatar>
                  <a-avatar src="https://joeschmoe.io/api/v1/random" />
                </template>
              </a-list-item-meta>
            </a-list-item>
          </a-list> -->
        </div>
        <div class="box">
            <h3>Clasificación moto 2</h3>
            <ul class="list-group">
        <li
          class="list-group-item"
          v-for="(rider, index) in ridersList"
          :key="index"
        >
          {{ rider.rider }} {{ rider.position }}ª
          <div v-if="rider.active" class="yes">
            <span>Activo</span>
          </div>
          <div v-else class="no"><span>Inactivo</span> <br /></div>
        </li>
      </ul>
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
import { CheckCircleFilled } from '@ant-design/icons-vue';
const storeTeams = useTeams();
const ridersList = storeTeams.riders;
const userTeam = storeTeams.userTeam;
const totalPoint = ref(0);
const suma = () => {
    userTeam.forEach((rider) =>{
        totalPoint.value += rider.newPoints
    })
}
onMounted(() => {
    suma()
    storeTeams.getTodos();
})
</script>

<style lang="scss" scoped>

.title1{
  border-bottom: 3px solid gray;
}
.homeBox{
  display: flex;
  height: 100%;
  place-items: center;
  justify-content: space-around;
  padding: 1rem;
  border-right: 1px solid gray;
  border-left: 1px solid gray;
  overflow: hidden;
  .box{
    padding: 1rem;
    border-right: 1px solid gray;
    border-left: 1px solid gray;

  }
}
</style>

