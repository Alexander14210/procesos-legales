import { useState } from "react";



function Formulario() {

  const [cliente, setCliente] = useState({
    'Numero de cliente': 0,
    'Nombre': '',
    'Apellido': '',
    'Identificacion': '',
    'Direccion': '',
  });

  const handleClienteChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setCliente(values => ({...values, [name]: value}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(cliente['Nombre']);
    fetch(
      ''
    );
  }

  return <form class="form-example" onSubmit={handleSubmit}>
      <div class="form-example">
        <label >Ingrese el nombre del cliente: </label>
        <input type="text" name="Nombre" id="nombre" value={cliente.Nombre} onChange={handleClienteChange}/>
      </div>
      <div class="form-example">
        <label >Ingrese el apellido del cliente: </label>
        <input type="text" name="Apellido" id="apellido" value={cliente.Apellido} onChange={handleClienteChange}/>
      </div>
      <div class="form-example">
        <label >Ingrese la identificación: </label>
        <input type="text" name="Identificacion" id="identificacion" value={cliente.Identificacion} onChange={handleClienteChange}/>
      </div>
      <div class="form-example">
        <label >Ingrese la dirección: </label>
        <input type="text" name="Direccion" id="direccion" value={cliente.Direccion} onChange={handleClienteChange}/>
      </div>
      <div class="form-example">
        <input type="submit" value="Agregar" />
      </div>
</form>
}

export default Formulario;