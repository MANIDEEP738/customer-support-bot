import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api";

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 30000,
});

export const sendMessage = async (message) => {
  const response = await apiClient.post("/chat/", {message});
  return response.data.reply;
};
