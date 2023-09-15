import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import './pages/Demanda';
import Dashboard from './pages/Dashboard';
import Formulario from './pages/Formulario';


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
      'Rango mora consolidado': '',
    },
    'Prestamo': {
      'Numero de prestamo': 0,
    },
    'Abogado': {
      'Nombre': '', 
    }
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Dashboard></Dashboard>
      </header>
    
      <Formulario></Formulario>
    </div>
  );
}

export default App;
