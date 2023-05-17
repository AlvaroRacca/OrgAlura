import "./Equipo.css";
import Colaborador from "../Colaborador/Colaborador";
import hexToRgba from "hex-to-rgba";

const Equipo = (props) => {
  //DESTRUCTURACION
  const { colorPrimario, titulo, id } = props.datos;
  const {colaboradores, eliminarColaborador, actualizarColor, like} = props;




  return <> { colaboradores.length > 0 && (
    <section className="equipo" style={{ backgroundColor:  hexToRgba(colorPrimario, 0.5) }}>
    <input type="color" 
           className="input-color"
           value={colorPrimario}
           onChange={(event)=>{
              actualizarColor(event.target.value, id);
           }}
    />
      <h3 style={{ borderColor: colorPrimario }}>{titulo}</h3>
      <div className="colaboradores">
        {
            colaboradores.map((colaborador, index) => {
                return  <Colaborador datos={colaborador} 
                            colorPrimario={colorPrimario} 
                            key={index}
                            eliminarColaborador={eliminarColaborador}
                            like= {like}>
                            </Colaborador>
            })
        }
      </div>
    </section>
  )}</>
};

export default Equipo;
