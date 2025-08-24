import axios from "axios";

const API_URL = import.meta.env.VITE_SUPERHERO_API_URL;

const api = axios.create({
  baseURL: API_URL,
});

export const getSuperheroes = async (page = 1, take = 5) => {
  const { data } = await api.get(`/superheroes?page=${page}&take=${take}`);
  return data;
};

export const getSuperheroById = async (id) => {
  const { data } = await api.get(`/superheroes/${id}`);
  return data;
};

export const createSuperhero = async (formData) => {
  const { data } = await api.post("/superheroes", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
};

export const updateSuperhero = async (id, formData) => {
  const { data } = await api.patch(`/superheroes/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
};

export const deleteSuperhero = async (id) => {
  const { data } = await api.delete(`/superheroes/${id}`);
  return data;
};
