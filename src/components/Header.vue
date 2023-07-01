<template>
    <a-carousel autoplay class="ant-carousel">
    
       
                <div class="header-image" v-for="(image, index) in randomImages" :key="index">
                    <div class="ant-image" >
                        <a-image  :src="image.src.medium" style="height:200px; object-fit: cover;" alt="..." className="img"></a-image>
                    </div>
                </div>

    </a-carousel>
</template>
<script>
import axios from "axios";
import { useQuery } from "@tanstack/vue-query";
import { SearchPexels as apiEndpoint } from "../Services/endpoints.js";
import { PEXELS_API_KEY as apiKey } from "../../secrets.js";
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
<style scoped>
.ant-carousel :deep(.header-image) {


margin-left: 25%;
width: 60% !important;
}

.header-image{
  display: grid  !important;
  place-items: center !important;

}

.ant-carousel :deep(.header-image .ant-image ){
  width: 100%;
  margin-top: 1rem;

}

</style>