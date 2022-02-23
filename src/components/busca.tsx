import { useState } from 'react';
import HandleFetchCall from '../hooks/useFetch';
import Button from '../styles/button';

const Busca = () => {
  const [motor, setMotor] = useState(true);
	return (
		<>
			{motor ? <HandleFetchCall /> : null}
			<Button onClick={() => setMotor(!motor)}>Mudar Motor</Button>
		</>
	);
};

export default Busca;