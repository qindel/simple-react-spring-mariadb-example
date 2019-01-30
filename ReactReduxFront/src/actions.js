// Este archivo contiene exportables de actions y action creators de Redux
import api from "./api";


// ACTIONS
export const BUSCAR_LIBROS = "BUSCAR_LIBROS";
export const ADD_LIBRO = "ADD_LIBRO";

// ACTION CREATORS
export const buscarLibros = () => ({
  type: BUSCAR_LIBROS,
  promise: api.buscarLibros(),
})

export const addLibro = (autor, titulo) => ({
  type: ADD_LIBRO,
  promise: api.addLibro(autor, titulo),
})