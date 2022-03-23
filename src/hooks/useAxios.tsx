import axios from 'axios';
import { Button } from '../styles/button';
import { useStore } from './usePacients';
export const HandleAxiosCall = () => {
	const { add } = useStore();
	const useAxios = async () => {
		const form = await axios.get('https://api-pacientes.herokuapp.com/pacientes');
		add(form.data);
	};
	return <Button onClick={useAxios}>Buscar com Axios</Button>;
};
