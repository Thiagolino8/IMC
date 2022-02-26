import { useState } from 'react';
import { HandleAxiosCall } from '../hooks/useAxios';
import { HandleFetchCall } from '../hooks/useFetch';
import { Button } from '../styles/button';

export const Search = () => {
	const [Engine, setEngine] = useState(true);
	return (
		<>
			{Engine ? <HandleFetchCall /> : <HandleAxiosCall />}
			<Button onClick={() => setEngine(!Engine)}>Mudar Motor</Button>
		</>
	);
};
