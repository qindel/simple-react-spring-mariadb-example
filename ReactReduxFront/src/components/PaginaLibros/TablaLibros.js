import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import FilaLibro from './FilaLibro';

/**
 * Representa la tabla de libros.
 * Sirve de demostración sobre los renderizados en bucle y el paso de propiedades 
 * entre componentes.
 * Nota: Los renderizados en bucle necesitan que establezcas un prop "key" única a cada iteración
 */
class TablaLibros extends Component {

  render() {
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              {this.props.headers.map((each) => 
                <th key={each.nombre}>
                  {each.nombre}
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((each) => (
              <FilaLibro key={each.idLibro} headers={this.props.headers} data={each}/>
            ))}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default TablaLibros;