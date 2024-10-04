import axios from "axios";

const API_URL = "http://159.223.44.158:3002"; // Replace with your API URL

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
