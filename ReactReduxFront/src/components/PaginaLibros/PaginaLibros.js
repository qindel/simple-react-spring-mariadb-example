import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
import { connect } from 'react-redux';
import { buscarLibros } from '../../actions';
import * as fromState from '../../reducers';
import TablaLibros from './TablaLibros';
import BotonAddLibro from './BotonAddLibro';

/**
 * Renderiza una página de libros.
 * Sirve de demostración acerca del uso de Redux y los renderizados condicionales.
 * Renderizados condicionales (CheatSheet) https://www.robinwieruch.de/conditional-rendering-react/
 * 
 * También se usa ComponentDidMount(), una función del lifecycle de los componentes de 
 * react que se ejecuta justo después de render()
 * React Lifecycle https://reactjs.org/docs/react-component.html#the-component-lifecycle
 * 
 * Las dos funciones anónimas presentes en el export se corresponden con mapStateToProps y mapDispatchToProps 
 * de react-redux 
 */
class Libros extends Component {

  constructor(props) {
    super(props);

    this.TablaLibrosHeaders = [
      {
        nombre: "ID",
        propiedad: "idLibro",
      },
      {
        nombre: "TÍTULO",
        propiedad: "titulo",
      },
      {
        nombre: "AUTOR",
        propiedad: "autor",
      },
    ]
  }

  componentDidMount() {
    this.props.buscarLibros();
  }

  render() {
    return (
      <div>
        <PageHeader>
          Libros
        </PageHeader>
        <BotonAddLibro/>
        <div>
          {this.props.libros && this.props.libros.length > 0
          ?
            <TablaLibros headers={this.TablaLibrosHeaders} data={this.props.libros}/>
          :
            <div>
              {this.props.estoyCargando ? "Cargando..." : "No hay libros para mostrar"}
            </div>
          }
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    libros: fromState.getAllLibros(state),
    estoyCargando: fromState.isLibrosLoading(state),
  }),
  (dispatch) => ({
    buscarLibros: () => dispatch(buscarLibros()),
  })
)(Libros)