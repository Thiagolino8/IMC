import { Button } from '../styles/button';
import { usePacients } from './usePacients';
export const HandleFetchCall = () => {
	const { useAdd } = usePacients();
	const useFetch = async () => {
		const response = await fetch('https://api-pacientes.herokuapp.com/pacientes');
		const form = await response.json();
		useAdd(form);
	};
	return <Button onClick={useFetch}>Buscar com Fetch</Button>;
};
