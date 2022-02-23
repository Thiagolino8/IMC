import { useState } from 'react';
import HandleAxiosCall from '../hooks/useAxios';
import HandleFetchCall from '../hooks/useFetch';
import Button from '../styles/button';

const Busca = () => {
  const [motor, setMotor] = useState(true);
	return (
		<>
			{motor ? <HandleFetchCall /> : <HandleAxiosCall />}
			<Button onClick={() => setMotor(!motor)}>Mudar Motor</Button>
		</>
	);
};

export default Busca;