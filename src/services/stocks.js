import axios from "axios";

const TOKEN = process.env.REACT_APP_TOKEN;
const BASE_URL =
  "https://cors-anywhere.herokuapp.com/https://cloud.iexapis.com";
// const api = axios.create({
//   baseURL: BASE_URL,
//   headers: {
//     Authorization: `${TOKEN}`
//   }
// });

const fetchStockSymbols = async () => {
  try {
    const resp = await axios(
      `${BASE_URL}/beta/ref-data/symbols?token=${TOKEN}`
    );
    console.log("this is resp", resp);
    return resp.data;
  } catch (e) {
    console.log("got a problem: ", e);
    return [];
  }
};

const fetchStockLists = async listType => {
  try {
    const resp = await axios(
      `${BASE_URL}/stock/market/list/${listType}?token=${TOKEN}`
    );
    console.log("this is resp", resp);
    return resp.data;
  } catch (e) {
    console.log("got a problem: ", e);
    return [];
  }
};

export { fetchStockSymbols, fetchStockLists };
