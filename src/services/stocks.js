import axios from "axios";

const TOKEN = process.env.REACT_APP_TOKEN;
const BASE_URL = "https://cloud.iexapis.com";
// const api = axios.create({
//   baseURL: BASE_URL,
//   headers: {
//     Authorization: `${TOKEN}`
//   }
// });

const fetchStockData = async () => {
  try {
    const resp = await axios(`${BASE_URL}/stock`);
    return resp.data;
  } catch (e) {
    console.log("got a problem: ", e);
    return [];
  }
};

export default fetchStockData;
