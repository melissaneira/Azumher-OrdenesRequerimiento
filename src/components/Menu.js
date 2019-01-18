import React, {Component} from 'react';

class Menu extends Component{
  render(){
    return(
      <div className="btn-group-vertical w-100">
        <button type="button" className="btn btn-dark text-left btn-block w-100">Ordenes de Requerimiento</button>
        <button type="button" className="btn btn-dark text-left btn-block w-100">Cotizaciones</button>
        <button type="button" className="btn btn-dark text-left btn-block w-100">Inventario</button>
        <button type="button" className="btn btn-dark text-left btn-block w-100">Ordenes de Compra</button>
        <button type="button" className="btn btn-dark text-left btn-block w-100">Ordenes de Servicio</button>
        <button type="button" className="btn btn-dark text-left btn-block w-100">Reportes</button>
      </div>
    )
  }
}

export default Menu;
