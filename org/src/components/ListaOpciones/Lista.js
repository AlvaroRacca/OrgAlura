import "./Lista.css";

const ListaOpciones = (props) => {

  const manejarCambio = (e) =>{
    props.actualizarValor(e.target.value);
  }

  return (
    <div className="lista-opciones">
      <label htmlFor="">Equipos</label>
      <select value={props.valor} onChange={manejarCambio}>
        <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
        {props.equipos.map( (equipos, index) => {
            return <option key={index} value={equipos}>{equipos}</option>
        })} 
      </select>
    </div>
  );
};

export default ListaOpciones;
