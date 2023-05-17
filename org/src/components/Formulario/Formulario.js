import "./Formulario.css";
import { useState } from "react";
import Campo from "../Campo/Campo";
import ListaOpciones from "../ListaOpciones/Lista";
import Boton from "../Boton/Boton";

const Formulario = (props) => {
    
  const {registrarColaborador, crearEquipo} = props;

  const [nombre, actualizarNombre] = useState("");
  const [puesto, actualizarPuesto] = useState("");
  const [foto, actualizarFoto] = useState("");
  const [equipo, actualizarEquipo] = useState("");
  const [titulo, actualizarTitulo] = useState("");
  const [color, actualizarColor] = useState("");

  

  const manejarEnvio = (evento) => {
    evento.preventDefault();
    let datosaEnviar = {
      nombre,
      puesto,
      foto,
      equipo,
    };
    registrarColaborador(datosaEnviar);
  };

  const manejarEquipoNuevo = (evento) => {
    evento.preventDefault();
    crearEquipo({titulo, colorPrimario: color});
  };

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <Campo
          titulo="Nombre"
          placeholder="Ingresar nombre"
          required
          valor={nombre}
          actualizarValor={actualizarNombre}
        />
        <Campo
          titulo="Puesto"
          placeholder="Ingresar puesto"
          required
          valor={puesto}
          actualizarValor={actualizarPuesto}
        />
        <Campo
          titulo="Foto"
          placeholder="Ingresar enlace de foto"
          required
          valor={foto}
          actualizarValor={actualizarFoto}
        />
        <ListaOpciones
          valor={equipo}
          actualizarValor={actualizarEquipo}
          equipos={props.equipos}
        ></ListaOpciones>
        <Boton texto="Crear"></Boton>
      </form>

      <form onSubmit={manejarEquipoNuevo}>
        <h2>Rellena el formulario para crear el equipo.</h2>
        <Campo
          titulo="Titulo"
          placeholder="Ingresar titulo"
          required
          valor={titulo}
          actualizarValor={actualizarTitulo}
        />
        <Campo
          titulo="Color"
          placeholder="Ingresar el color"
          required
          valor={color}
          actualizarValor={actualizarColor}
          type="color"
        />
        <Boton texto="Registrar equipo"></Boton>
      </form>
    </section>
  );
};

export default Formulario;
