<template>
    <div>
        <button @click="getSummaryMotoGpLastYear">Start</button>
    </div>
</template>

<script setup>
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../Services/FirebaseService';
import axios from 'axios';

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const year=2022
const getSummaryMotoGpLastYear = async () => {

    try {
      await seasonsDb.stages.forEach(async (stage) => {
        if (stage.description == `MotoGP ${year.toString()}`) {
          let refApi = stage.id
          const responseSummaryMotoGp = await axios.get(`http://api.sportradar.us/motogp/trial/v2/en/sport_events/${refApi}/summary.json?api_key=k9fth2ku9cu2rex43hkx2nqs`);
          const summaryMotoGp = responseSummaryMotoGp.data
          console.log(summaryMotoGp)
        //   await setDoc(doc(db, "summaryMotoGp", "summary"), summaryMotoGp)
        }

      });

    } catch (error) {
      console.log(error)
    }

}

</script>

<style lang="scss" scoped>

</style>