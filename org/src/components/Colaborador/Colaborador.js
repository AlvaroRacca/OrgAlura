import "./Colaborador.css";
import {AiFillCloseCircle} from "react-icons/ai"
import {FcLike, FcLikePlaceholder} from "react-icons/fc"

const Colaborador = (props) => {
  const { nombre, puesto, foto, equipo, id, fav } = props.datos;
  const { colorPrimario, eliminarColaborador, like } = props;
  return (
    <div className="colaborador">
      <AiFillCloseCircle className="eliminar" onClick={()=>eliminarColaborador(id)}/>
      <div className="encabezado" style={{ backgroundColor: colorPrimario }}>
        <img src={foto} alt={nombre} />
      </div>

      <div className="info">
        <h4>{nombre}</h4>
        <h5>{puesto}</h5>

        {fav ? <FcLike onClick={() => like(id)}></FcLike> : 
        <FcLikePlaceholder onClick={() => like(id)}></FcLikePlaceholder>}
      </div>
    </div>
  );
};

export default Colaborador;
