import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';
import router from '../router/routes';

export const useTeams = defineStore('useTeams', {
  state: () => ({
    userTeam: ref([]),
    dollars: ref(250),
    riders: ref([]),
    isLoading: false,
    isFetching: ref(false),
    isError: ref(false),
    data: ref(null),
    error: ref(null),
  }),
  actions: {
    async getTodos() {
      this.isLoading = true;
      try {
        const response = await fetch(
          "https://api.mockaroo.com/api/9794e140?count=20&key=59f73b60"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

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

        this.riders  = riders;
        this.isFetching  = false;
        this.isError  = false;
        this.data  = riders;
        this.error  = null;
      } catch (error) {
        console.error("Error fetching riders", error);
        this.isFetching  = false;
        this.isError  = true;
        this.data  = null;
        this.error  = error;
      }finally{
        this.isLoading = false;
      }
    },
    addRider(rider) {
      this.riders.push(rider)
      // esto es solo para que funcione sin reiniciar la página 
      router.push('/confirmrider')
    },
    modifyRider(rider, newPoints) {

      this.riders[rider].newPoints = newPoints

    },
    removeRider(rider) {
      this.riders.splice(
        this.riders.indexOf(rider),
        1
      );
      router.push('/confirmdeleted');
    },
    removeRiderTeam(rider) {
      const element = rider
      const index = this.riders.indexOf(element)
      this.riders.splice(index, 1)

    },
    addRiderTeam(rider) {
      if (this.userTeam.length < 3 && this.dollars >= rider.points && !this.userTeam.includes(rider)) {
        if (!this.userTeam.includes(rider)) {
          if (this.dollars >= rider.points) {
            this.userTeam.push(rider)
            const dolares = this.dollars - rider.points
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
      const dolares = this.dollars + rider.points
      this.dollars = dolares

    },
  },
})