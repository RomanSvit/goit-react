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
    .get(`${BASE_URL}movie/${id}?api_key=${KEY}`)
    .then(response => response.data);
};
// https://api.themoviedb.org/3/movies/290859?api_key=6760bd47a4eee027c4d8920912c403b1
// https://api.themoviedb.org/3/person/{person_id}?api_key=<<api_key>>&language=en-US
export const getInfoActors = async id => {
  return axios
    .get(`${BASE_URL}person/${id}?api_key=${KEY}`)
    .then(response => response.data);
};
