import axios from "axios";

const baseURL = "https://simple-pexels-proxy.onrender.com"; // Replace with your actual API endpoint

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
