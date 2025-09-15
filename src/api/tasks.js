import axios from "axios";

const api = axios.create({
  baseURL: "https://tasks-api-953722210930.southamerica-east1.run.app/",
});

export const getTasks = () => api.get("/tasks");
export const getTask = (id) => api.get(`/tasks/${id}`);
export const createTask = (task) => api.post("/tasks", task);
export const updateTask = (id, task) => api.put(`/tasks/${id}`, task);
export const deleteTask = (id) => api.delete(`/tasks/${id}`);