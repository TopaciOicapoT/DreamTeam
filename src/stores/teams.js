import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';
import router from '../router/routes';
import TeamsMockup from "../mockups/TeamsMockup.json"
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, where, setDoc } from 'firebase/firestore';
import { auth, db, MotoGp } from '../Services/FirebaseService';

export const useTeams = defineStore('useTeams', {
  state: () => ({
    userTeam: ref([]),
    userTeamId: ref([]),
    confirmAddRiderTeam: true,
    dollars: ref(250),
    riders: ref([]),
    ridersMotoGp: [],
    userTeamMGP: [],
    isLoading: false,
    isFetching: ref(false),
    isError: ref(false),
    data: ref(null),
    error: ref(null),
    valor: ref(0)
  }),
  actions: {
    async getRidersMotoGp() {
      if (this.ridersMotoGp.length !== 0) {
        return;
      }
      this.isLoading = true;
      try {
        const docRefMotoGp = doc(db, "summaryMotoGp", "summary");
        const docMotoGp = await getDoc(docRefMotoGp);
        if (docMotoGp.exists()) {
          const summaryMotoGp = docMotoGp.data()
          summaryMotoGp.stage.competitors.forEach((rider)=>{
            if(rider.result.points && rider.result.races >= 3 ){
              this.valor = Math.floor(rider.result.points *1.5) 
            }else{
              this.valor= 2
            }
            rider.result.points
            this.ridersMotoGp.push({
              ...rider,
              value:this.valor
            })
          })
          return this.ridersMotoGp
        } else {
          console.log("no existe el documento")
        }

      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
        console.log("getRidersMotoGp " , errorMessage)
      } finally {
        this.isLoading = false
      }
    },
    async getTeamMGP(){
      if (this.userTeamMGP.length!= 0) {
        return
      }
      try {
        const docRefTeamMGP = doc(db, "userTeam", auth.currentUser.uid);
        const docTeamMGP= await getDoc(docRefTeamMGP);
        const teamMGP = docTeamMGP.data()
        Object.keys(teamMGP).forEach(rId =>{
          let objetId = teamMGP[rId]
          this.ridersMotoGp.forEach((rider)=>{
            if (rider.id == objetId) {
              this.userTeamMGP.push(rider)
            }
          })
        })
      } catch (error) {
        console.log("getTeamMGP",error.message)
      }
    },

    async getTodos() {
      this.isLoading = true;
      try {
        // const response = await fetch(
        //   "https://api.mockaroo.com/api/9794e140?count=20&key=59f73b60"
        // );

        // if (!response.ok) {
        //   throw new Error("Network response was not ok");
        // }

        const data = TeamsMockup;
        // const data = await response.json();

        // Mapear los datos obtenidos desde la API al formato esperado por useTeams
        const riders = data.map((item) => ({
          position: item.position,
          rider: item.rider,
          points: item.points,
          newPoints: null,
          active: true,
          addButtonVisible: true,
          modifyVisible: false
        }));

        this.riders = riders;
        this.isFetching = false;
        this.isError = false;
        this.data = riders;
        this.error = null;
      } catch (error) {
        console.error("Error fetching riders", error);
        this.isFetching = false;
        this.isError = true;
        this.data = null;
        this.error = error;
      } finally {
        this.isLoading = false;
      }
    },
    addRiderTeam(rider) {
      // console.log(rider)
      this.confirmAddRiderTeam= false
      if (this.userTeam.length < 3) {
        if (!this.userTeam.includes(rider)) {
          if (this.dollars >= rider.value) {
            this.userTeam.push(rider)
            this.userTeamId.push(rider.id)
            const dolares = this.dollars - rider.value
            this.confirmAddRiderTeam= true
            return this.dollars = dolares

          } else {
            return alert("No tienes fondos suficientes 🔻")
          }

        } else {
          return alert("Ese piloto ya esta en tu equipo 👍")
        }

      } else {
        return alert("Has llegado al límite de pilotos 🏍️")
      }
    },
    removeRiderTeam(rider) {
      console.log(rider.value)
      const element = rider
      const index = this.userTeam.indexOf(element)
      this.userTeam.splice(index, 1)
      const dolares = this.dollars + rider.value
      this.dollars = dolares

    },
    async createTeam(){
      if (this.userTeam.length != 3) {
        alert("El equipo debe tener tres pilotos")
        return
      }
      try {

        const objectMotoGp = this.userTeamId.reduce((team, riderId)=>{
          console.log(riderId)
          team[riderId] = riderId
          return team
        }, {})
        await setDoc(doc(db, "userTeam", auth.currentUser.uid ), objectMotoGp )
      } catch (error) {
        console.log("createTeam ", error.message )
      }
    }
  },
})