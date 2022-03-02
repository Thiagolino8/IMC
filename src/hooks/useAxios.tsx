import axios from 'axios';
import { Button } from '../styles/button';
import { usePacients } from './usePacients';
export const HandleAxiosCall = () => {
	const { handleAdd } = usePacients();
	const useAxios = async () => {
		const form = await axios.get('https://api-pacientes.herokuapp.com/pacientes');
		handleAdd(form.data);
	};
	return <Button onClick={useAxios}>Buscar com Axios</Button>;
};
