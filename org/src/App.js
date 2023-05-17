import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Formulario from "./components/Formulario/Formulario";
import MiOrg from "./components/MiOrg/MiOrg";
import Equipo from "./components/Equipo/Equipo";
import Footer from "./components/Footer/Footer";
import {v4 as uuid } from "uuid";

function App() {
  //funcion para mostrar el formulaio o ocultarlo;
  const [mostrarFormulario, actualizarFormulario] = useState(false);

  const cambiarFormulario = () => {
    actualizarFormulario(!mostrarFormulario);
  };

  //REGISTRAR COLABORADOR
  const [colaboradores, actualizarColaboradores] = useState([{
    equipo:"Front End", foto:"https://github.com/alvaroracca.png",
    nombre:"Alvaro Racca", puesto: "Desarrollador Web",
    id: uuid(), fav:true
  }]);

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programacion",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    { 
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    { 
      id: uuid(),
      titulo: "Movil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9" },
    {
      id: uuid(),
      titulo: "Innovacion y Gestion",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    },
  ])

  const registrarColaborador = (colaborador) => {
    //agarra los colaboradores que tiene, los copia y luego le agrega nuevos colaboradores
    actualizarColaboradores([...colaboradores, colaborador]);
  };


  //ELIMMINAR COLABORADOR
  const eliminarColaborador = (id) =>{
    const nuevosColaboradores = colaboradores.filter((colaborador) =>colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  } 

  //ACTUALIZA COLOR DE EQUIPO
  const actualizarColor = (color, id) =>{
    const equiposActualizados = equipos.map((equipo)=>{
        if(equipo.id === id){
          equipo.colorPrimario = color
        }
        return equipo
    })
    actualizarEquipos(equiposActualizados);
  }

  //CREAR EQUIPO
  const crearEquipo = (nuevoEquipo) =>{
    actualizarEquipos([...equipos, {...nuevoEquipo, id:uuid()}])
  }


  const like = (id) =>{
    const colaboradoresLike = colaboradores.map((colaborador)=>{
      if (colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })

    actualizarColaboradores(colaboradoresLike);
  }


  return (
    <div>
      <Header></Header>

      {mostrarFormulario === true ? (
        <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      ) : (
        <></>
      )}

      <MiOrg cambiarFormulario={cambiarFormulario}></MiOrg>

      {equipos.map((equipo) => {
        return (
          <Equipo datos={equipo} key={equipo.titulo} 
            colaboradores={colaboradores.filter((colaborador) => colaborador.equipo === equipo.titulo)}
            eliminarColaborador={eliminarColaborador}
            actualizarColor={actualizarColor}
            like = {like}
            ></Equipo>);
      })}

      <Footer></Footer>

    </div>
  );
}

export default App;
