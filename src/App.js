import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsuarioCobros from './pages/UsuarioCobros';
import './App.css';

function Time() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  return <p>The current time is {currentTime}.</p>;
}

function foo() {
  return {
    'Cliente': {
      'Numero de Cliente': 600079978,
      'Nombre': 'EVA',
      'Apellido': 'PEREZ',
      'Identificacion': '4-988-9849',
      'Direccion': 'Residencial El Valle, calle 47, casa 50, Distrtito de San Miguelito, Provincia de Panamá',
    },
    'OperacionInicial': {
      'Fecha':'26/4/2023',
      'Dias mora': 114,
      'Principal Bank Capital': 175334.19,
      'Interes': 3000,
      'Gastos': 515,
      'Feci': 180,
      'Comision Fiduciaria': 350,
      'Saldo Total': 180079.19,
      'Fecha de ultimo pago': '14/12/2022',
      'Monto del ultimo pago aplicado': 898.53,
      'Rango mora consolidado0': '91-120',
    },
    'Prestamo': {
      'Numero de prestamo': 345678901234,
    },
    'Abogado': {
      'Nombre': 'Consumo', 
    }
  }
}

function foo2() {
  return {
    'Cliente': {
      'Numero de Cliente': 0,
      'Nombre': '',
      'Apellido': '',
      'Identificacion': '',
      'Direccion': '',
    },
    'OperacionInicial': {
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
      'Rango mora consolidado0': '',
    },
    'Prestamo': {
      'Numero de prestamo': 0,
    },
    'Abogado': {
      'Nombre': '', 
    }
  }
}


function AsignarDemanda(){

  const [name, setName] = useState("");
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
    alert(cliente['Numero de cliente']);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Ingrese el nombre del cliente:
        <input
          type="text" 
          name='Nombre'
          value={cliente.Nombre}
          onChange={handleClienteChange}
        />
      </label>
      <label>Ingrese el apellido:
        <input
          type="text" 
          name='Apellido'
          value={cliente.Apellido}
          onChange={handleClienteChange}
        />
      </label>
      <label>Ingrese la identificacion:
        <input
          type="text" 
          name='Identificacion'
          value={cliente.Identificacion}
          onChange={handleClienteChange}
        />
      </label>
      <input type="submit" />
    </form>
  )
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <AsignarDemanda></AsignarDemanda>
      </header>
    </div>
  );
}

export default App;
