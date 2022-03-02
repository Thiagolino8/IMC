import { Button } from '../styles/button';
import { usePacients } from './usePacients';
export const HandleFetchCall = () => {
	const { handleAdd } = usePacients();
	const useFetch = async () => {
		const response = await fetch('https://api-pacientes.herokuapp.com/pacientes');
		const form = await response.json();
		handleAdd(form);
	};
	return <Button onClick={useFetch}>Buscar com Fetch</Button>;
};
