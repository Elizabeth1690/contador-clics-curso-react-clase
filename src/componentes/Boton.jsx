import React from "react";
import "../hojas-de-estilos/Boton.css";

class Boton extends React.Component {
  render() {
    return (
      <div>
        <button
          className={this.props.esBotonDeClic ? "boton-clic" : "boton-reiniciar"}
          onClick={this.props.manejarClic}
        >
          {this.props.texto}
        </button>
      </div>
    );

  }
}

export default Boton;
