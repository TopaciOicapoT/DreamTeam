<template>
    <a-carousel>
        <template autoplay v-if="!isLoading">
            <!-- <div> -->
                <template v-for="(image, index) in randomImages" :key="index">
                    <div className="header-image">
                        <a-image :src="image.src.medium" style="height:200px; object-fit: scale-down;" alt="..." className="img"></a-image>
                        <!-- <a-image :src="image.src.medium" style="height:100%; object-fit: scale-down;" alt="..." className="img"></a-image>
                        <a-image :src="image.src.medium" style="height:100%; object-fit: scale-down;" alt="..." className="img"></a-image> -->
                    </div>
                </template>
            <!-- </div> -->
        </template>
    <template v-else>
        <span>Loading...</span>
    </template>
    </a-carousel>
</template>
<script>
import axios from "axios";
import { useQuery } from "@tanstack/vue-query";
import { SearchPexels as apiEndpoint } from "/src/endpoints.js";
import { PEXELS_API_KEY as apiKey } from "/secrets.js";
export default {
  name: "Header",
  data() {
    return {
        headerText:
        "Bienvenidos a la página de gestión de equipos de MotoGP, donde podrás jugar con dinero real y recibir premios.",
        randomImages: [],
        
    };
  },
  setup() {
    const queryKey = ["randomImages"];
    const queryFn = async () => {
      const response = await axios.get(apiEndpoint, {
        headers: {
          Authorization: apiKey,
        },
        params: {
          query: "MotoGP",
          per_page: 20,
        },
      });
      return response.data.photos;
    };
    const { data: randomImages = [], isLoading } = useQuery(queryKey, queryFn);
    return {
      randomImages,
      isLoading,
    };
  },
};
</script>
<style>
/* .header-image { */
/* .header-image{
  max-height: 250px;
} */
.ant-image {
    /* margin:auto; */
    display: block  !important;
    /* height: 100%; */
    width: 100%;
    padding: 15px;
} 
</style>