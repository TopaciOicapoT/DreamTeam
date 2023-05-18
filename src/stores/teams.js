import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';
import router from '../router/routes';
import TeamsMockup from "../mockups/TeamsMockup.json"
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, where, setDoc } from 'firebase/firestore/lite';
import { auth, db } from '../FirebaseConfi';

export const useTeams = defineStore('useTeams', {
  state: () => ({
    userTeam: ref([]),
    confirmAddRiderTeam: true,
    dollars: ref(250),
    riders: ref([]),
    allRiders: [],
    isLoading: false,
    isFetching: ref(false),
    isError: ref(false),
    data: ref(null),
    error: ref(null),
  }),
  actions: {
    async getAllRiders() {
      if (this.allRiders.length !== 0) {
        return;
      }
      this.isLoading = true;
      try {
        const q = query(collection(db, 'ridersDataBase'))
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach(doc => {
          this.allRiders.push({
            id: doc.id,
            ...doc.data()
          })
          
         
        })
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    },
    async updateRiders(rider) {
      try {
        let rd = {rider} 
        console.log(rd.rider.id)       
        await setDoc(doc(db, "ridersDataBase", rd.rider.name), rd)
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
        console.log(errorMessage)
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
      this.confirmAddRiderTeam= false
      if (this.userTeam.length < 3) {
        if (!this.userTeam.includes(rider.rider)) {
          if (this.dollars >= rider.rider.value) {
            this.userTeam.push(rider.rider)
            const dolares = this.dollars - rider.rider.value
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
      const element = rider
      const index = this.userTeam.indexOf(element)
      this.userTeam.splice(index, 1)
      const dolares = this.dollars + rider.value
      this.dollars = dolares

    },
  },
})