import axios from "axios";

export const assetsIntance = axios.create({
  baseURL: "https://api-test-ln.herokuapp.com",
});
