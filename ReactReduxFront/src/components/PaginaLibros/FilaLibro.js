import React, { Component } from 'react';

/**
 * Representa cada fila de la tabla de libros.
 * Muestra una manera distinta de acceder a los atributos de un objeto JSON, 
 * lo que ofrece versatilidad al mover propiedades entre componentes
 */
class FilaLibro extends Component {

  onFilaLibroClick(id) {
    alert(`En este punto, podrías lanzar un modal de modificación o borrado para el libro con id = ${id}`)
  }

  render() {
    return (
      <tr className="clickable" onClick={() => this.onFilaLibroClick(this.props.data.idLibro) }>
        {this.props.headers.map((each) => (
          <td key={each.propiedad}>{this.props.data[each.propiedad]}</td>
        ))}
      </tr>
    )
  }
}

export default FilaLibro;