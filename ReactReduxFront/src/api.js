/**
 * Aqui se condensan las llamadas a backend, para ser usadas en los action creators de redux.
 * Si el archivo llegara a crecer demasiado, podría subdividirse por las entidades que se acceden 
 * en backend 
 */ 

/**
 * Las funciones que retornen llamadas ejecutadas con axios están retornando promesas realmente, no 
 * los datos en sí. Ojo con la naturaleza asíncrona de JavaScript
 * 
 * Promesas en JavaScript
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise
 */
import axios from 'axios';

// Configurable
const baseRestUrl = process.env.REACT_APP_BACKEND_ADDR || 'http://localhost:8080';

/**
 * Devuelve todos los libros en BD
 */
const buscarLibros = () => {
  return axios.get(
    `${baseRestUrl}/libros`
  )
  .then(data => data.data)
}

/**
 * Crea un nuevo libro. Después, si tiene éxito, ejecuta la misma consulta que buscarLibros 
 * para devolver de nuevo todos los libros en BD
 * @param {String} autor 
 * @param {String} titulo
 * 
 * Requests encadenadas con axios
 * https://github.com/axios/axios/issues/708
 */
const addLibro = (autor, titulo) => {
  return axios.post(
    `${baseRestUrl}/libros`,
    {
      autor,
      titulo,
    }
  )
  .then(
    data => axios.get(
      `${baseRestUrl}/libros`
    ).then(data => data.data))
}

export default {
  buscarLibros,
  addLibro,
}
