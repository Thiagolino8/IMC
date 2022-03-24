import { useState } from 'react';
import { Button } from '../styles/button';
import { fetcher, axiosFetcher, useStore } from '../stores/store';

export const TableBtns = () => {
	const [Engine, setEngine] = useState(true);
	const {reset} = useStore();
	return (
		<>
			<Button onClick={Engine ? fetcher : axiosFetcher}>{Engine ? 'Buscar com Fetch' : 'Buscar com Axios'}</Button>
			<Button onClick={() => setEngine(!Engine)}>Mudar Motor</Button>
			<Button onClick={reset}>Resetar</Button>;
		</>
	);
};
