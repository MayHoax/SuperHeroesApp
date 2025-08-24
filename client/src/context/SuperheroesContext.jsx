import { createContext, useContext, useReducer, useCallback } from "react";
import { superheroReducer, initialState } from "../reducer/superheroesReducer";
import * as api from "../api/superheroes";

const SuperheroContext = createContext();

export const SuperheroProvider = ({ children }) => {
  const [state, dispatch] = useReducer(superheroReducer, initialState);

  const getSuperheroes = useCallback(async (page = 1, take = 5) => {
    dispatch({ type: "LOADING" });
    try {
      const data = await api.getSuperheroes(page, take);
      dispatch({ type: "FETCH_SUPERHEROES_SUCCESS", payload: data });
    } catch (err) {
      dispatch({
        type: "ERROR",
        payload: err.response?.data?.message || err.message,
      });
    }
  }, []);

  const getSuperheroById = useCallback(async (id) => {
    dispatch({ type: "LOADING" });
    try {
      const data = await api.getSuperheroById(id);
      dispatch({ type: "FETCH_SUPERHERO_SUCCESS", payload: data });
    } catch (err) {
      dispatch({
        type: "ERROR",
        payload: err.response?.data?.message || err.message,
      });
    }
  }, []);

  const createSuperhero = useCallback(async (formData) => {
    dispatch({ type: "LOADING" });
    try {
      const data = await api.createSuperhero(formData);
      dispatch({ type: "CREATE_SUPERHERO_SUCCESS", payload: data });
      return data;
    } catch (err) {
      dispatch({
        type: "ERROR",
        payload: err.response?.data?.message || err.message,
      });
      throw err;
    }
  }, []);

  const updateSuperhero = useCallback(async (id, formData) => {
    dispatch({ type: "LOADING" });
    try {
      const data = await api.updateSuperhero(id, formData);
      dispatch({ type: "UPDATE_SUPERHERO_SUCCESS", payload: data });
      return { success: true, data };
    } catch (err) {
      const message = err.response?.data?.message || err.message;
      dispatch({ type: "ERROR", payload: message });
      return { success: false, error: message };
    }
  }, []);

  const deleteSuperhero = useCallback(async (id) => {
    dispatch({ type: "LOADING" });
    try {
      await api.deleteSuperhero(id);
      dispatch({ type: "DELETE_SUPERHERO_SUCCESS", payload: id });
    } catch (err) {
      dispatch({
        type: "ERROR",
        payload: err.response?.data?.message || err.message,
      });
    }
  }, []);

  return (
    <SuperheroContext.Provider
      value={{
        ...state,
        getSuperheroes,
        getSuperheroById,
        createSuperhero,
        updateSuperhero,
        deleteSuperhero,
      }}
    >
      {children}
    </SuperheroContext.Provider>
  );
};

export const useSuperheroes = () => useContext(SuperheroContext);
