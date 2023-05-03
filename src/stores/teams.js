import { defineStore } from 'pinia';
import { ref } from 'vue';
import router from '../router/routes';

export const useTeams = defineStore('useTeams', {
  state: () => ({
    userTeam: ref([]),
    dollars: ref(120),

    riders: ref([
      {
        position: 1,
        rider: "Marco Bezzecchi",
        points: 64,
        newPoints: null,
        active: true,
        addButtonVisible: true,
        modifyVisible: false,
      },
      {
        position: 2,
        rider: "Francesco Bagnaia",
        points: 53,
        newPoints: null,
        active: true,
        addButtonVisible: true,
        modifyVisible: false,
      },
      {
        position: 3,
        rider: "Álex Rins",
        points: 47,
        newPoints: null,
        active: true,
        addButtonVisible: true,
        modifyVisible: false,
      },
      {
        position: 4,
        rider: "Maverick Viñales",
        points: 45,
        newPoints: null,
        active: true,
        addButtonVisible: true,
        modifyVisible: false,
      },
      {
        position: 5,
        rider: "Johann Zarco",
        points: 44,
        newPoints: null,
        active: true,
        addButtonVisible: true,
        modifyVisible: false,
      },
      {
        position: 6,
        rider: "Luca Marini",
        points: 38,
        newPoints: null,
        active: true,
        addButtonVisible: true,
        modifyVisible: false,
      },
      {
        position: 7,
        rider: "Fabio Quartararo",
        points: 34,
        newPoints: null,
        active: true,
        addButtonVisible: true,
        modifyVisible: false,
      },
      {
        position: 8,
        rider: "Álex Márquez",
        points: 33,
        newPoints: null,
        active: true,
        addButtonVisible: true,
        modifyVisible: false,
      },
      {
        position: 9,
        rider: "Brad Binder",
        points: 30,
        newPoints: null,
        active: true,
        addButtonVisible: true,
        modifyVisible: false,
      },
      {
        position: 10,
        rider: "Franco Morbidelli",
        points: 29,
        newPoints: null,
        active: true,
        addButtonVisible: true,
        modifyVisible: false,
      },
      {
        position: 11,
        rider: "Jorge Martín",
        points: 29,
        newPoints: null,
        active: true,
        addButtonVisible: true,
        modifyVisible: false,
      },
      {
        position: 12,
        rider: "Jack Miller",
        points: 26,
        newPoints: null,
        active: true,
        addButtonVisible: true,
        modifyVisible: false,
      },
      {
        position: 13,
        rider: "Aleix Espargaró",
        points: 18,
        newPoints: null,
        active: true,
        addButtonVisible: true,
        modifyVisible: false,
      },
      {
        position: 14,
        rider: "Miguel Oliveira",
        points: 16,
        newPoints: null,
        active: true,
        addButtonVisible: true,
        modifyVisible: false,
      },
      {
        position: 15,
        rider: "Augusto Fernández",
        points: 14,
        newPoints: null,
        active: true,
        addButtonVisible: true,
        modifyVisible: false,
      },
    ]),


  }),
  actions: {
    addRider(rider) {
      this.riders.push(rider)
      // esto es solo para que funcione sin reiniciar la página
      router.push('/confirmrider')
    },
    modifyRider(rider, newPoints) {

      this.riders[rider].newPoints = newPoints

    },
    removeRider(rider) {
      const element = rider
      const index = this.riders.indexOf(element)
      this.riders.splice(index, 1)

    },
    addRiderTeam(rider) {
      if (this.userTeam.length < 3) {
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
  }

})