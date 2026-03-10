import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

export const getNotes = () => API.get("/notes");

export const addNote = (text) =>
  API.post("/notes", { text });
