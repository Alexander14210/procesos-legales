import { useState } from "react";

function Formulario() {

  const [tipoFormulario, setTipoFormulario] = useState('natural');

  const handleRadioChange = (event) => {
    setTipoFormulario(event.target.value);
  };

  return(
    <div className="TipoPersona">
        <h2>Formulario para asignar un caso a demandar</h2>
        <h3>Seleccione el tipo de cliente</h3>
        <input type="radio" value="natural" 
        id="natural" onChange={handleRadioChange} checked={tipoFormulario === 'natural'}/>
        <label >Natural</label>

        <input type="radio" value="juridica" 
        id="juridica" onChange={handleRadioChange} checked={tipoFormulario === 'juridica'}/>
        <label >Juridica</label>
        {tipoFormulario === 'natural' && <FormularioPersonaNatural />}
        {tipoFormulario === 'juridica' && <FormularioPersonaJuridica />}
    </div>
    
  );
  

}

function FormularioPersonaNatural() {

  const [cliente, setCliente] = useState({
    'Numero de cliente': 0,
    'Nombre': '',
    'Apellido': '',
    'Identificacion': '',
    'Direccion': '',
  });

  const [operacionInicial, setOperacionInicial] = useState({
    'Fecha':'',
    'Dias mora': 0,
    'Principal Bank Capital': 0.00,
    'Interes': 0,
    'Gastos': 0,
    'Feci': 0,
    'Comision Fiduciaria': 0,
    'Saldo Total': 0.00,
    'Fecha de ultimo pago': '',
    'Monto del ultimo pago aplicado': 0.00,
    'Rango mora consolidado': '',
  });

  const handleClienteChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setCliente(values => ({...values, [name]: value}));
  };

  const handleOperacionChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setOperacionInicial(values => ({...values, [name]: value}));
  };

  const requestOptions = {
    method: 'POST',
    mode: 'cors', 
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 'ClientesNaturales' : cliente, 'OperacionInicial': operacionInicial })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      '/email', requestOptions
    );
  }

  return (
  <div>
      <br></br>
  <form class="form-example" onSubmit={handleSubmit}>
  <div className="form-row" style={{ display: 'flex', justifyContent: 'space-between' }}>
  <div className="form-column" style={{ flex: 1, marginRight: '10px' }}>
      <div class="form-example">
        <label >Ingrese el nombre del cliente: </label>
        <input type="text" name="Nombre" id="nombre" value={cliente.Nombre} onChange={handleClienteChange} autoFocus/>
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
  </div>
    <div style={{ flex: 1, marginRight: '10px' }}>
      <div class="form-example">
        <label >Ingrese la fecha: </label>
        <input type="date" name="Fecha" id="fecha" value={operacionInicial.Fecha} onChange={handleOperacionChange}/>
      </div>
      <div class="form-example">
        <label >Ingrese los dias de mora: </label>
        <input type="number" name="Dias mora" id="mora" value={operacionInicial['Dias mora']} onChange={handleOperacionChange}/>
      </div>
      <div class="form-example">
        <label >Ingrese el capital: </label>
        <input type="number" name="Principal Bank Capital" id='capital' value={operacionInicial['Principal Bank Capital']} onChange={handleOperacionChange}/>
      </div>
      <div class="form-example">
        <label >Ingrese los intereses: </label>
        <input type="number" step={'any'} name="Interes" id='interes' value={operacionInicial['Interes']} onChange={handleOperacionChange}/>
      </div>
      <div class="form-example">
        <label >Ingrese los gastos: </label>
        <input type="number" step={'any'} name="Gastos" id='gastos' value={operacionInicial['Gastos']} onChange={handleOperacionChange}/>
      </div>
    </div>
    <div style={{ flex: 1 }}>
      <div class="form-example">
        <label >Ingrese el feci: </label>
        <input type="number" step={'any'} name="Feci" id='feci' value={operacionInicial['Feci']} onChange={handleOperacionChange}/>
      </div>
      <div class="form-example">
        <label >Ingrese la comision fiduciaria: </label>
        <input type="number" name='Comision Fiduciaria' step={'any'} id='feci' value={operacionInicial['Comision Fiduciaria']} onChange={handleOperacionChange}/>
      </div>
      <div class="form-example">
        <label >Ingrese el saldo total: </label>
        <input type="number" name='Saldo Total' step={'any'} id='feci' value={operacionInicial['Saldo Total']} onChange={handleOperacionChange}/>
      </div>
      <div class="form-example">
        <label >Ingrese la fecha del ultimo pago: </label>
        <input type="date" name='Fecha de ultimo pago' id='fechaUltimo' value={operacionInicial['Fecha de ultimo pago']} onChange={handleOperacionChange}/>
      </div>
      <div class="form-example">
        <label >Ingrese el ultimo pago aplicado </label>
        <input type="number" name='Monto del ultimo pago aplicado' step={'any'} id='montoUltimoPago' value={operacionInicial['Monto del ultimo pago aplicado']} onChange={handleOperacionChange}/>
      </div>
      <div class="form-example">
        <label >Ingrese el rango de mora </label>
        <input type="text" name='Rango mora consolidado' id='rango' value={operacionInicial['Rango mora consolidado']} onChange={handleOperacionChange}/>
      </div>
    </div>
  </div>
  <br></br>
  <div class="form-example">
      <input type="submit" value="Agregar" />
  </div>

    </form>

 
    </div>
);
}

function FormularioPersonaJuridica() {

  const [cliente, setCliente] = useState({
    'Numero de cliente': 0,
    'Nombre': '',
    'Apellido': '',
    'Identificacion': '',
    'Direccion': '',
  });

  const [operacionInicial, setOperacionInicial] = useState({
    'Fecha':'',
    'Dias mora': 0,
    'Principal Bank Capital': 0.00,
    'Interes': 0,
    'Gastos': 0,
    'Feci': 0,
    'Comision Fiduciaria': 0,
    'Saldo Total': 0.00,
    'Fecha de ultimo pago': '',
    'Monto del ultimo pago aplicado': 0.00,
    'Rango mora consolidado': '',
  });

  const handleClienteChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setCliente(values => ({...values, [name]: value}));
  };

  const handleOperacionChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setOperacionInicial(values => ({...values, [name]: value}));
  };

  const requestOptions = {
    method: 'POST',
    mode: 'cors', 
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 'ClientesJuridicos' : cliente, 'OperacionInicial': operacionInicial })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      '/email', requestOptions
    );
  }

  return (
  <div>
  <br></br>
  <form class="form-example" onSubmit={handleSubmit}>
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
  <div style={{ flex: 1, marginRight: '10px' }}>
      <div class="form-example">
        <label >Ingrese el nombre del cliente: </label>
        <input type="text" name="Nombre" id="nombre" value={cliente.Nombre} onChange={handleClienteChange} autoFocus/>
      </div>
      <div class="form-example">
        <label >Ingrese el apellido del cliente: </label>
        <input type="text" name="Apellido" id="apellido" value={cliente.Apellido} onChange={handleClienteChange}/>
      </div>
      <div class="form-example">
        <label >Ingrese el R.U.C: </label>
        <input type="text" name="Identificacion" id="identificacion" value={cliente.Identificacion} onChange={handleClienteChange}/>
      </div>
      <div class="form-example">
        <label >Ingrese la dirección: </label>
        <input type="text" name="Direccion" id="direccion" value={cliente.Direccion} onChange={handleClienteChange}/>
      </div>
  </div>
    <div style={{ flex: 1, marginRight: '10px' }}>
      <div class="form-example">
        <label >Ingrese la fecha: </label>
        <input type="date" name="Fecha" id="fecha" value={operacionInicial.Fecha} onChange={handleOperacionChange}/>
      </div>
      <div class="form-example">
        <label >Ingrese los dias de mora: </label>
        <input type="number" name="Dias mora" id="mora" value={operacionInicial['Dias mora']} onChange={handleOperacionChange}/>
      </div>
      <div class="form-example">
        <label >Ingrese el capital: </label>
        <input type="number" name="Principal Bank Capital" id='capital' value={operacionInicial['Principal Bank Capital']} onChange={handleOperacionChange}/>
      </div>
      <div class="form-example">
        <label >Ingrese los intereses: </label>
        <input type="number" step={'any'} name="Interes" id='interes' value={operacionInicial['Interes']} onChange={handleOperacionChange}/>
      </div>
      <div class="form-example">
        <label >Ingrese los gastos: </label>
        <input type="number" step={'any'} name="Gastos" id='gastos' value={operacionInicial['Gastos']} onChange={handleOperacionChange}/>
      </div>
    </div>
    <div style={{ flex: 1 }}>
      <div class="form-example">
        <label >Ingrese el feci: </label>
        <input type="number" step={'any'} name="Feci" id='feci' value={operacionInicial['Feci']} onChange={handleOperacionChange}/>
      </div>
      <div class="form-example">
        <label >Ingrese la comision fiduciaria: </label>
        <input type="number" name='Comision Fiduciaria' step={'any'} id='feci' value={operacionInicial['Comision Fiduciaria']} onChange={handleOperacionChange}/>
      </div>
      <div class="form-example">
        <label >Ingrese el saldo total: </label>
        <input type="number" name='Comision Fiduciaria' step={'any'} id='feci' value={operacionInicial['Comision Fiduciaria']} onChange={handleOperacionChange}/>
      </div>
      <div class="form-example">
        <label >Ingrese la fecha del ultimo pago: </label>
        <input type="date" name='Fecha de ultimo pago' id='fechaUltimo' value={operacionInicial['Fecha de ultimo pago']} onChange={handleOperacionChange}/>
      </div>
      <div class="form-example">
        <label >Ingrese el ultimo pago aplicado </label>
        <input type="number" name='Monto del ultimo pago aplicado' step={'any'} id='montoUltimoPago' value={operacionInicial['Monto del ultimo pago aplicado']} onChange={handleOperacionChange}/>
      </div>
      <div class="form-example">
        <label >Ingrese el rango de mora </label>
        <input type="text" name='Rango mora consolidado' id='rango' value={operacionInicial['Rango mora consolidado']} onChange={handleOperacionChange}/>
      </div>
    </div>
  </div>
  <br></br>
  <div class="form-example">
      <input type="submit" value="Agregar" />
  </div>

    </form>
    </div>
);
}

export default Formulario;