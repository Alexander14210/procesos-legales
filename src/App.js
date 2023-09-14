import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
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

function AsignarDemanda(){
  const [abogado, setAbogado] = useState("ABOGADO_A");

  const handleChange = (event) => {
    setAbogado(event.target.value);
    
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(abogado);
    fetch('/email', {
      method: 'POST',
      mode: 'cors',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({abogado: abogado})
    });
  }
 
  return (
    <div>
    <p>Seleccione un abogado para asignar la demanda</p>
    <form onSubmit={handleSubmit}>
      <select value={abogado} onChange={handleChange}>
        <option value="ABOGADO_A">ABOGADO A</option>
        <option value="ABOGADO_B">ABOGADO B</option>
      </select>
      <input type="submit" />
    </form>
    </div>
    
  )
}


function Header() {
  const [name, setName] = useState("");

  useEffect(() => {
    fetch('/supervisor').then(res => res.json()).then(data => {
      setName(data.name);
    });
  },[]);


  return <p>Bienvenido, {name}.</p>;
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
