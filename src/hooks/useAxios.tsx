import axios from "axios";
import Button from "../styles/button";
import { usePacients } from "./usePacients";
const HandleAxiosCall = () => {
  const { useAdd } = usePacients();
  const useAxios = async () => {
    const form = await axios.get('https://api-pacientes.herokuapp.com/pacientes');
    useAdd(form.data)
  }
	return <Button onClick={useAxios}>Buscar com Axios</Button>;
}

export default HandleAxiosCall;