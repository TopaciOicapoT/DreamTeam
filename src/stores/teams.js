import { defineStore } from 'pinia';
import { ref } from 'vue';
import router from '../router/routes';

export const useTeams = defineStore('useTeams', {
    state: () => ({
        userTeam: ref([]),
        
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
        addRider (rider){
            this.riders.push(rider)
            this.riders.forEach((rider) => {
                // console.log(rider)
            })
            // esto es solo para que funcione sin reiniciar la página
            router.push('/confirmrider')
        },
        modifyRider(rider, newPoints){
            
            this.riders[rider].points += newPoints
            
        },
        addRiderTeam(rider){
            if (this.userTeam.length < 3 && !this.userTeam.includes(rider)) {
                this.userTeam.push(rider)
                console.log(rider)
                console.log("ya esta")
            } else {
                alert("Has llegado al límite de pilotos 🏍️ o ese piloto ya esta en tu equipo 👍")
            }
        },
        removeRiderTeam(rider){
            const element = rider
            const index = this.userTeam.indexOf(element)
            console.log(index)
            this.userTeam.splice(index, 1)

        },
    }

})