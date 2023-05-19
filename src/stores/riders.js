import { defineStore } from 'pinia';
// import { ridersMockup as apiEndpoint } from '../endpoints';
import axios from 'axios';
import { useQuery } from "@tanstack/vue-query";
import RidersMockup from "../mockups/RidersMockup.json"

export const useRiders = defineStore('useRiders', {
  state: () => ({
    riders: [],
    isLoading: false,
  }),
  actions: {
    async fetchRiders() {
        // this.isLoading = true;
        // const { data } = await useQuery(
        //   ["ridersMockup"],
        //   async () => {
        //     try {
        //       const response = await axios.get(apiEndpoint, {});
        //       return response.data;
        //     } catch (error) {
        //       console.error(error);
        //     }
        //   }
        // );
        // this.riders = data;
        this.riders = RidersMockup;
        this.isLoading = false;
        
      }
    },
});
