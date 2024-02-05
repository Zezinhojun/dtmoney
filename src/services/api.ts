import axios from "axios";

export const api = axios.create({
  baseURL: "https://dtmoney-six-sandy.vercel.app/api"
})
