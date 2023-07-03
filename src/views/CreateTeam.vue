<template>
  <div v-if="!loadingPage">
    <a-card
      :title="`Puntuación total: ${storeTeams?.userPoints}`"
      class="totalPoints"
      size="middle"
    >
    </a-card>
  </div>
  <span class="spin" v-else> <a-spin size="large" /></span>
  <a-layout-content v-if="!loadingPage" class="content">
    <div v-if="storeTeams.userTeamM3.length === 0" class="boxRiders">
      <div>
        <RidersList
          tittleRiders="Pilotos Moto GP"
          category="Moto GP"
          :ridersList="storeTeams?.ridersMotoGp"
          :categoryTeam="storeTeams?.teamMGP"
        />
      </div>
      <div>
        <RidersList
          tittleRiders="Pilotos Moto 2"
          category="Moto 2"
          :ridersList="storeTeams?.ridersMoto2"
          :categoryTeam="storeTeams?.teamM2"
        />
      </div>
      <div>
        <RidersList
          tittleRiders="Pilotos Moto 3"
          category="Moto 3"
          :ridersList="storeTeams?.ridersMoto3"
          :categoryTeam="storeTeams?.teamM3"
        />
      </div>
    </div>

    <div v-if="storeTeams.userTeamM3.length === 3" class="boxTeamRiders">
      <div>
        <TeamRiders
          teamTittle="Mi equipo Moto GP"
          :teamRidersList="storeTeams?.userTeamMGP"
          :teamPoints="storeTeams?.teamMgpPoints"
        />
      </div>
      <div>
        <TeamRiders
          teamTittle="Mi equipo Moto 2"
          :teamRidersList="storeTeams?.userTeamM2"
          :teamPoints="storeTeams?.teamM2Points"
        />
      </div>
      <div>
        <TeamRiders
          teamTittle="Mi equipo Moto 3"
          :teamRidersList="storeTeams?.userTeamM3"
          :teamPoints="storeTeams?.teamM3Points"
        />
      </div>
    </div>
  </a-layout-content>

  <div
    class="myTeam"
    v-if="
      storeTeams.userTeamMGP.length === 0 &&
      storeTeams.userTeamM2.length === 0 &&
      storeTeams.userTeamM3.length === 0 &&
      loadingPage === false
    "
  >
    <div class="title1">
      <h1>Tu equipo</h1>
      <h2>Fondos: {{ storeTeams.dollars }}.000 $</h2>
      <h3>Puntuación de tu equipo: {{ totalPoint }}</h3>
    </div>
    <div class="box-teams">
      <TemporalTeam categoryTeam="Moto GP" :actualTeam="storeTeams?.teamMGP" />
      <TemporalTeam categoryTeam="Moto 2" :actualTeam="storeTeams?.teamM2" />
      <TemporalTeam categoryTeam="Moto 3" :actualTeam="storeTeams?.teamM3" />
    </div>
    <div
      v-if="
        storeTeams.teamMgpConfirm &&
        storeTeams.teamM2Confirm &&
        storeTeams.teamM3Confirm
      "
    >
      <a-button type="primary">
        <a-popconfirm
          title="¿Estas seguro de que este es tu equipo?, una vez creado no podras modificarlo"
          ok-text="Yes"
          cancel-text="No"
          @confirm="confirm"
          @cancel="cancel"
        >
          <a href="#">Crear equipo </a>
        </a-popconfirm>
      </a-button>
    </div>
  </div>
  <form @submit.prevent="resetDb" style="margin: 5rem">
    <button type="submit">Reiniciar equipos y dineros</button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import router from "../router/routes";
import { useTeams } from "../stores/teams";
import { message } from "ant-design-vue";
import RidersList from "../components/RidersList.vue";
import TeamRiders from "../components/TeamRiders.vue";
import TemporalTeam from "../components/TemporalTeam.vue";
const loadingPage = ref(true);
const storeTeams = useTeams();
storeTeams.getUsers();
storeTeams.getTeamMGP();
storeTeams.getTeamM2();
storeTeams.getTeamM3();
storeTeams.getRidersMotoGp();
storeTeams.getRidersMoto2();
storeTeams.getRidersMoto3();
storeTeams.updateUserPoints();
const totalPoint = ref(0);

const confirm = () => {
  try {
    storeTeams.createTeamMGP();
    storeTeams.createTeamM2();
    storeTeams.createTeamM3();
    message.success("Este equipo sera guardado ");
    router.push("/confirmcreateteam");
  } catch (error) {
    message.error("Parece que algo ha salido mal, intentalo mas tarde");
  }
};
const cancel = (e) => {
  message.error("Piensalo bien mi pana");
};

const resetDb = () => {
  storeTeams.resetTeamsDb();
  setTimeout(() => {
    location.reload();
  }, 2500);
};

const confirmLoading = () => {
  loadingPage.value = false;
};
const getRiders = () => {
  storeTeams.getUsers();
  storeTeams.getTeamMGP();
  storeTeams.getTeamM2();
  storeTeams.getTeamM3();
  storeTeams.getRidersMotoGp();
  storeTeams.getRidersMoto2();
  storeTeams.getRidersMoto3();
  storeTeams.updateUserPoints();
};

setTimeout(getRiders, 800);
setTimeout(confirmLoading, 2000);
</script>

<style lang="scss" scoped>
.totalPoints {
  text-align: center;
}

.spin {
  display: grid;
  place-content: center;
  margin-top: 300px;
}
.content {
  display: grid;
  place-items: center;
  background-image: url(../../public/img/gifRodillaFila.gif);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 5px;
  max-height: 600px;
  min-width: 100px;
  text-align: center;
  overflow: scroll;
  .boxRiders {
    display: flex;
    justify-content: space-around;
    padding: 1rem;
  }

  .boxTeamRiders {
    display: flex;
    justify-content: space-evenly;
    padding: 1rem;
  }

  .title1 {
    border-bottom: 3px solid gray;
  }
}
.myTeam {
  display: grid;
  overflow: auto;
  text-align: center;
  margin: 2rem;
  font-size: small;
  background-image: url(../../public/img/gifNeon.gif);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 500px;

  .title1 {
    padding: 1rem;
    max-height: 130px;
    background-color: rgba(147, 147, 147, 0.8);
  }
  .box-teams {
    display: flex;
    place-content: center;
    padding: 2rem;
    margin: 2rem;
  }
}
</style>
