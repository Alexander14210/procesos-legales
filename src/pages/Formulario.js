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
        {/* {tipoFormulario === 'juridica' && <FormularioPersonaJuridica />} */}
    </div>
    
  );
  

}

function FormularioPersonaNatural() {

  const [cliente, setCliente] = useState({
    'id_cliente_natural': 0,
    'nombre': '',
    'apellido': '',
    'identificacion': '',
    'direccion': '',
  });

  const [operacionInicial, setOperacionInicial] = useState({
    'fecha':'',
    'id_cliente_natural': 0,
    'dias_mora': 0,
    'principal_bank_capital': 0.00,
    'intereses': 0,
    'gastos': 0,
    'feci': 0,
    'comision_fiduciaria': 0,
    'saldo_total': 0.00,
    'fecha_ultimo_pago': '',
    'monto_ultimo_pago_aplicado': 0.00,
    'rango_mora_consolidado': '',
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
        <input type="text" name="nombre" id="nombre" value={cliente.nombre} onChange={handleClienteChange} autoFocus/>
      </div>
      <div class="form-example">
        <label >Ingrese el apellido del cliente: </label>
        <input type="text" name="apellido" id="apellido" value={cliente.apellido} onChange={handleClienteChange}/>
      </div>
      <div class="form-example">
        <label >Ingrese la identificación: </label>
        <input type="text" name="identificacion" id="identificacion" value={cliente.identificacion} onChange={handleClienteChange}/>
      </div>
      <div class="form-example">
        <label >Ingrese la dirección: </label>
        <input type="text" name="direccion" id="direccion" value={cliente.direccion} onChange={handleClienteChange}/>
      </div>
  </div>
    <div style={{ flex: 1, marginRight: '10px' }}>
      <div class="form-example">
        <label >Ingrese la fecha: </label>
        <input type="date" name="fecha" id="fecha" value={operacionInicial.fecha} onChange={handleOperacionChange}/>
      </div>
      <div class="form-example">
        <label >Ingrese los dias de mora: </label>
        <input type="number" name="dias_mora" id="mora" value={operacionInicial['dias_mora']} onChange={handleOperacionChange}/>
      </div>
      <div class="form-example">
        <label >Ingrese el capital: </label>
        <input type="number" name='principal_bank_capital' id='capital' value={operacionInicial['principal_bank_capital']} onChange={handleOperacionChange}/>
      </div>
      <div class="form-example">
        <label >Ingrese los intereses: </label>
        <input type="number" step={'any'} name="intereses" id='intereses' value={operacionInicial['interes']} onChange={handleOperacionChange}/>
      </div>
      <div class="form-example">
        <label >Ingrese los gastos: </label>
        <input type="number" step={'any'} name="gastos" id='gastos' value={operacionInicial['gastos']} onChange={handleOperacionChange}/>
      </div>
    </div>
    <div style={{ flex: 1 }}>
      <div class="form-example">
        <label >Ingrese el feci: </label>
        <input type="number" step={'any'} name="feci" id='feci' value={operacionInicial['feci']} onChange={handleOperacionChange}/>
      </div>
      <div class="form-example">
        <label >Ingrese la comision fiduciaria: </label>
        <input type="number" name='comision_fiduciaria' step={'any'} id='feci' value={operacionInicial['comision_fiduciaria']} onChange={handleOperacionChange}/>
      </div>
      <div class="form-example">
        <label >Ingrese el saldo total: </label>
        <input type="number" name='saldo_total' step={'any'} id='feci' value={operacionInicial['saldo_total']} onChange={handleOperacionChange}/>
      </div>
      <div class="form-example">
        <label >Ingrese la fecha del ultimo pago: </label>
        <input type="date" name='fecha_ultimo_pago' id='fechaUltimo' value={operacionInicial['fecha_ultimo_pago']} onChange={handleOperacionChange}/>
      </div>
      <div class="form-example">
        <label >Ingrese el ultimo pago aplicado </label>
        <input type="number" name='monto_ultimo_pago_aplicado' step={'any'} id='montoUltimoPago' value={operacionInicial['monto_ultimo_pago_aplicado']} onChange={handleOperacionChange}/>
      </div>
      <div class="form-example">
        <label >Ingrese el rango de mora </label>
        <input type="text" name='rango_mora_consolidado' id='rango' value={operacionInicial['rango_mora_consolidado']} onChange={handleOperacionChange}/>
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
    'id_cliente_natural': 0,
    'nombre': '',
    'apellido': '',
    'identificacion': '',
    'direccion': '',
  });

  const [operacionInicial, setOperacionInicial] = useState({
    'fecha':'',
    'id_cliente_natural': 0,
    'dias_mora': 0,
    'principal_bank_capital': 0.00,
    'intereses': 0,
    'gastos': 0,
    'feci': 0,
    'comision_fiduciaria': 0,
    'saldo_total': 0.00,
    'fecha_ultimo_pago': '',
    'monto_ultimo_pago_aplicado': 0.00,
    'rango_mora_consolidado': '',
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
        <input type="text" name="nombre" id="nombre" value={cliente.nombre} onChange={handleClienteChange} autoFocus/>
      </div>
      <div class="form-example">
        <label >Ingrese el apellido del cliente: </label>
        <input type="text" name="apellido" id="apellido" value={cliente.apellido} onChange={handleClienteChange}/>
      </div>
      <div class="form-example">
        <label >Ingrese la identificación: </label>
        <input type="text" name="identificacion" id="identificacion" value={cliente.identificacion} onChange={handleClienteChange}/>
      </div>
      <div class="form-example">
        <label >Ingrese la dirección: </label>
        <input type="text" name="direccion" id="direccion" value={cliente.direccion} onChange={handleClienteChange}/>
      </div>
  </div>
    <div style={{ flex: 1, marginRight: '10px' }}>
      <div class="form-example">
        <label >Ingrese la fecha: </label>
        <input type="date" name="fecha" id="fecha" value={operacionInicial.fecha} onChange={handleOperacionChange}/>
      </div>
      <div class="form-example">
        <label >Ingrese los dias de mora: </label>
        <input type="number" name="dias_mora" id="mora" value={operacionInicial['dias_mora']} onChange={handleOperacionChange}/>
      </div>
      <div class="form-example">
        <label >Ingrese el capital: </label>
        <input type="number" name='principal_bank_capital' id='capital' value={operacionInicial['principal_bank_capital']} onChange={handleOperacionChange}/>
      </div>
      <div class="form-example">
        <label >Ingrese los intereses: </label>
        <input type="number" step={'any'} name="intereses" id='intereses' value={operacionInicial['interes']} onChange={handleOperacionChange}/>
      </div>
      <div class="form-example">
        <label >Ingrese los gastos: </label>
        <input type="number" step={'any'} name="gastos" id='gastos' value={operacionInicial['gastos']} onChange={handleOperacionChange}/>
      </div>
    </div>
    <div style={{ flex: 1 }}>
      <div class="form-example">
        <label >Ingrese el feci: </label>
        <input type="number" step={'any'} name="feci" id='feci' value={operacionInicial['feci']} onChange={handleOperacionChange}/>
      </div>
      <div class="form-example">
        <label >Ingrese la comision fiduciaria: </label>
        <input type="number" name='comision_fiduciaria' step={'any'} id='feci' value={operacionInicial['comision_fiduciaria']} onChange={handleOperacionChange}/>
      </div>
      <div class="form-example">
        <label >Ingrese el saldo total: </label>
        <input type="number" name='saldo_total' step={'any'} id='feci' value={operacionInicial['saldo_total']} onChange={handleOperacionChange}/>
      </div>
      <div class="form-example">
        <label >Ingrese la fecha del ultimo pago: </label>
        <input type="date" name='fecha_ultimo_pago' id='fechaUltimo' value={operacionInicial['fecha_ultimo_pago']} onChange={handleOperacionChange}/>
      </div>
      <div class="form-example">
        <label >Ingrese el ultimo pago aplicado </label>
        <input type="number" name='monto_ultimo_pago_aplicado' step={'any'} id='montoUltimoPago' value={operacionInicial['monto_ultimo_pago_aplicado']} onChange={handleOperacionChange}/>
      </div>
      <div class="form-example">
        <label >Ingrese el rango de mora </label>
        <input type="text" name='rango_mora_consolidado' id='rango' value={operacionInicial['rango_mora_consolidado']} onChange={handleOperacionChange}/>
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