import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { withRouter} from 'react-router-dom';

/**
 * NavBar básico a modo de demostración del uso de 'withRouter' y 'history'
 */
class TopNavBar extends Component {
  
  handleOnClickInicio() {
    this.props.history.push(`/`)
  }

  handleOnClickLibros() {
    this.props.history.push(`/libros`)
  }
  
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand className="clickable">
            <span onClick={() => this.handleOnClickInicio()}>ReactRedux Qindel</span>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem onClick={() => this.handleOnClickLibros()}>
            Libros
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}

export default withRouter(TopNavBar)