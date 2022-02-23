import useFetchCall from "../hooks/useFetch";
import Button from "../styles/button";

const Buscar = () => { 
  return (<Button onClick={useFetchCall}>Buscar Pacientes</Button>)
}

export default Buscar;