import axios from "axios";

const TOKEN = process.env.REACT_APP_TOKEN;
const BASE_URL = "https://newsapi.org/v2/everything?";
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `${TOKEN}`
  }
});

const fetchRandomPlanet = async () => {
  try {
    const resp = await axios(`${BASE_URL}/planets/random`);
    return resp.data.planet;
  } catch (e) {
    console.log("got a problem: ", e);
    return [];
  }
};

const submitPlanet = async planet => {
  try {
    console.log(`this is planet:`, planet);
    const resp = await axios.post(`${BASE_URL}/planets/`, planet);
    return resp.data.planet;
  } catch (e) {
    console.log("got a problem: ", e);
    return [];
  }
};

export { fetchPlanets, fetchRandomPlanet, submitPlanet };
