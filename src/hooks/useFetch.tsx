import { Button } from '../styles/button';
import { useStore } from './usePacients';
export const HandleFetchCall = () => {
	const { add } = useStore();
	const useFetch = async () => {
		const response = await fetch('https://api-pacientes.herokuapp.com/pacientes');
		const form = await response.json();
		add(form);
	};
	return <Button onClick={useFetch}>Buscar com Fetch</Button>;
};
