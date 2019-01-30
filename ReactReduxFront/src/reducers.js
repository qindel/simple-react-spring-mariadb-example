import { combineReducers } from 'redux';
import libros from "./reducers/libros";

/**
 * El export default de este archivo corresponde a un reducer general formado por cada
 * uno de los reducers independientes que componen el proyecto.
 */
export default combineReducers({
  libros,
});

/**
 * Aquí se exportan de manera específica zonas concretas del state de redux en forma de métodos.
 * Lo hacemos de esta manera para mantener el control sobre el mismo y no realizar un acceso indiscriminado
 * al state.
 * Todas las funciones deben contar al menos con el parámetro "state" representando el state de redux en cada
 * momento. Accedemos siempre a state.<nombreDelReducer>.<propiedad>, y la devolvemos o tratamos una copia de 
 * la misma antes de devolverla.
 */
export const getAllLibros = (state) => state.libros.todos;
export const isLibrosLoading = (state) => state.libros.cargando;
