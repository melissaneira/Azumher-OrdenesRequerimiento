import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// data
import { ordenes } from './ordenes.json';

// subcomponents
import NuevaORForm from './components/NuevaORForm';
import Menu from './components/Menu';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ordenes
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  removeOrden(index) {
    this.setState({
      ordenes: this.state.ordenes.filter((e, i) => {
        return i !== index
      })
    });
  }

  handleAddTodo(orden) {
    this.setState({
      ordenes: [...this.state.ordenes, orden]
    })
  }

  render() {
    const ordenes = this.state.ordenes.map((orden, i) => {
      return (

            <div className="row w-75 text-center" key={i}>
              <div className="col-9 mt-2">{orden.nombre}</div>
              <div className="col-1"><button
                className="btn btn-azumher">
                <i className="fas fa-cog "></i>
              </button></div>
              <div className="col-1"><button
                className="btn btn-azumher">
                <i className="fas fa-edit "></i>
              </button></div>
              <div className="col-1">
                <button
                  className="btn btn-azumher"
                  onClick={this.removeOrden.bind(this, i)}>
                  <i className="fas fa-trash-alt"></i>
                </button>
              </div>
            </div>
      )
    });

    // RETURN THE COMPONENT
    return (
      <div className="App">

        <div className="container-fluid">
          <div className="row mt-4">

            <div className="col-md-3 text-center">

              <Menu></Menu>

              
              <NuevaORForm onAddTodo={this.handleAddTodo}></NuevaORForm>
            </div>

            <div className="col-md-9">

            <nav className="navbar navbar-dark bg-dark">
              <a className="navbar-brand" href="/">
                Ordenes de Requerimiento
                <span className="badge badge-pill badge-light ml-2">
                  {this.state.ordenes.length}
                </span>
              </a>
            </nav>

            <div className="text-left mt-3 mb-3">
              <button className="btn btn-azumher">
                <i className="fas fa-plus-circle fa-2x"><span className="h5 ml-2">Añadir Requerimiento</span></i>
              </button>
            </div>
            <div className="w-25 mb-5">
              <input className="form-control" type="search" placeholder="Buscar Orden" aria-label="Busqueda"/>
            </div>
            {ordenes}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
