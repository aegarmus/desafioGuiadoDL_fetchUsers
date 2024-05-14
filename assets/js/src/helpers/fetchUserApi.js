import { URL_BASE } from "../constants/urlApi.js";

export const getRandomUsers = async () => {
  try {
    const response = await fetch(`${URL_BASE}/?results=10`);
    const data = await response.json();

    return data.results;
  } catch (error) {
    throw new Error("No obtuvimos una respuesta de la API");
  }
};
