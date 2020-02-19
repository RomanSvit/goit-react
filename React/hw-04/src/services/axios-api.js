import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3/";
const KEY = "6760bd47a4eee027c4d8920912c403b1";
export const fetchArticles = async () => {
  try {
    const data = await axios.get(`${BASE_URL}trending/all/day?api_key=${KEY}`);
    return data.data.results;
  } catch (error) {
    throw new Error(error);
  }
};

export const getDetailsInfoMovie = async id => {
  return axios
    .get(`${BASE_URL}movie/${id}?api_key=${KEY}&language=ru-RU`)
    .then(response => response.data);
};

export const getInfoActors = async id => {
  return axios
    .get(`${BASE_URL}movie/${id}/credits?api_key=${KEY}&language=ru-RU`)
    .then(response => response.data);
    
};
export const getInfoReviews = async id => {
  return axios
    .get(`${BASE_URL}movie/${id}/reviews?api_key=${KEY}&language=en-RU`)
    .then(response => response.data);

};
