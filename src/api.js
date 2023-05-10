import axios from 'axios';
import { useQuery } from "@tanstack/vue-query";

export async function defaultFetchCall(apiEndpoint, params) {
  const response = await axios.get(apiEndpoint, params);
  return response.data;
}

export async function defaultfetchData(apiEndpoint, queryName, mockupFile) {
    try {
      const { data, isLoading, error } = await useQuery(
        [queryName],
        async () => {
          try {
            return await defaultFetchCall(apiEndpoint, {});
          } catch (error) {
            console.error("Error en la llamada:", error);
            throw error;
          }
        }
      );
  
      if (error && mockupFile) {
        try {
          const mockupData = require(`../mockups/${mockupFile}`);
          return { data: mockupData, isLoading, error: { message: "No hay datos disponibles. Se han cargado los de ejemplo." } };
        } catch (error) {
          console.error(`Error al cargar el archivo de ejemplo ${mockupFile}:`, error);
        }
      }
  
      return { data, isLoading, error };
    } catch (error) {
      console.error("Error en la llamada a useQuery:", error);
      return { data: [], isLoading: false, error };
    }
  }

  export default {defaultfetchData, defaultFetchCall};