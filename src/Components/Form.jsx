import React, { useState } from "react";
import Card from "./Card";


const Form = () => {

  const [cliente, setCliente] = useState({
    nombre: "",
    email: ""
  });

  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  

  const handleSubmit = (e) => {
    e.preventDefault();
    const regex = /\S+@\S+\.\S+/;
    if (cliente.nombre.trim().length > 5 && regex.test(cliente.email)) {
      setShow(true);
      setError(false);
    } else {
      setError(true)

    };
  
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>Nombre</label>
      <input type="text" 
      onChange={(e) => 
        setCliente({...cliente, nombre: e.target.value})
      }/>
      <label>Email</label>
      <input type="text" 
      onChange={(e) => 
        setCliente({...cliente, email: e.target.value})}/>
      <button>Enviar</button>
    </form>

    {show && <p>Gracias {cliente.nombre}, te contactaremos cuanto antes via mail.</p>}

    {error && <p>Por favor verifique la informacion nuevamente.</p>}


    

    </>
    
  )
};

export default Form;
