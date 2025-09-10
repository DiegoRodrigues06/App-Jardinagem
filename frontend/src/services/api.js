import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001", // backend rodando nessa porta
});

export default api;
