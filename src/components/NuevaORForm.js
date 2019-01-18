import React, { Component } from 'react';

class NuevaORForm extends Component {
  constructor () {
    super();
    this.state = {
      nombre: '',
      solicitante: '',
      area: '',
      fecha: '17/01/2019'
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState({
      nombre: '',
      solicitante: '',
      area: '',
      fecha: '17/01/2019'
    });
  }

  handleInputChange(e) {
    const {value, name} = e.target;
    console.log(value, name);
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="card">
        <form onSubmit={this.handleSubmit} className="card-body">
          <div className="form-group">
            <input
              type="text"
              name="nombre"
              className="form-control"
              value={this.state.nombre}
              onChange={this.handleInputChange}
              placeholder="Nombre"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="solicitante"
              className="form-control"
              value={this.state.solicitante}
              onChange={this.handleInputChange}
              placeholder="Solicitante"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="area"
              className="form-control"
              value={this.state.area}
              onChange={this.handleInputChange}
              placeholder="Area"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="fecha"
              className="form-control"
              value={this.state.fecha}
              onChange={this.handleInputChange}
              placeholder="Fecha"
              />
          </div>

          <button type="submit" className="btn btn-dark">
            Guardar
          </button>
        </form>
      </div>
    )
  }

}

export default NuevaORForm;
