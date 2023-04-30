import { defineStore } from 'pinia';
import { ref } from 'vue';
import router from '../router/routes';

export const useTeams = defineStore('useTeams', {
    state: () => ({
        riders: ref([
            {
                position: 1,
                rider: "Marco Bezzecchi",
                points: 64,
                active: true,
            },
            {
                position: 2,
                rider: "Francesco Bagnaia",
                points: 53,
                active: true,
            },

            {
                position: 3,
                rider: "Álex Rins",
                points: 47,
                active: true,
            },
            {
                position: 4,
                rider: "Maverick Viñales",
                points: 45,
                active: true,
            },

            {
                position: 5,
                rider: "Johann Zarco",
                points: 44,
                active: true,
            },

            {
                position: 6,
                rider: "Luca Marini",
                points: 38,
                active: true,
            },

            {
                position: 7,
                rider: "Fabio Quartararo",
                points: 34,
                active: true,
            },
            {
                position: 8,
                rider: "Álex Márquez",
                points: 33,
                active: true,
            },

            {
                position: 9,
                rider: "Brad Binder",
                points: 30,
                active: true,
            },

            {
                position: 10,

                rider: "Franco Morbidelli",
                points: 29,
                active: true,
            },

            {
                position: 11,

                rider: "Jorge Martín",
                points: 29,
                active: true,
            },

            {
                position: 12,

                rider: "Jack Miller",
                points: 26,
                active: true,
            },

            {
                position: 13,

                rider: "Aleix Espargaró",
                points: 18,
                active: true,
            },

            {
                position: 14,

                rider: "Miguel Oliveira",
                points: 16,
                active: true,
            },
            {
                position: 15,

                rider: "Augusto Fernández",
                points: 14,
                active: true,
            },

            {
                position: 16,
                rider: "Fabio Di Giannantonio",
                points: 13,
                active: true,
            },

            {
                position: 17,

                rider: "Takaaki Nakagami",
                points: 7,
                active: true,
            },

            {
                position: 18,

                rider: "Marc Márquez",
                points: 7,
                active: true,
            },

            {
                position: 19,

                rider: "Joan Mir",
                points: 5,
                active: true,
            },
            {
                position: 19,

                rider: "Michele Pirro",
                points: 5,
                active: true,
            },
            {
                position: 22,

                rider: "Raúl Fernández",
                points: 2,
                active: true,
            },

            {
                position: 21,

                rider: "Jonas Folger",
                points: 4,
                active: true,
            },

    
        ]),


    }),
    actions: {
        addRider (rider){
            this.riders.push(rider)
            this.riders.forEach((rider) => {
                // console.log(rider)
            })
            router.push('/confirmrider')
        }
    }

})