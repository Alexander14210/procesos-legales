function Demanda(props) {
  return <h2>Soy la demanda {props.id}</h2>;
}

function Garage() {
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <ul>
        <li><Demanda id="1"/></li>
      </ul>
      
    </>
  );
}



export default Garage;


