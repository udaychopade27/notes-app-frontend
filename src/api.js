import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

export const getNotes = () => API.get("/api/notes");

export const addNote = (text) =>
  API.post("/api/notes", { text });
