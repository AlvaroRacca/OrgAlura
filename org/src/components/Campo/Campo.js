import "./Campo.css";

const Campo = (props) =>{

    const { type ="text" } = props;

    const recibirValor = (e) =>{
        props.actualizarValor(e.target.value);
    }

    return <div className={`campo campo-${type}`}>
        <label htmlFor="">{props.titulo}</label>
        <input 
        placeholder={props.placeholder} 
        required={props.required} 
        value={props.valor}
        onChange={recibirValor}   
        type={type} 
        />
    </div>
}

export default Campo;