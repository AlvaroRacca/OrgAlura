import { useState } from 'react';
import "./MiOrg.css";


const MiOrg = (props) =>{

    //ESTADO: CONST[NOMBREVARIABLE, FUNCIONACTUALIZAR] = USESTATE(VALORINICIAL)

    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarFormulario}  />
    </section>
}


export default MiOrg;