import { usePacients } from '../hooks/usePacients';
import { Button } from '../styles/button';

export const Reset = () => {
	const { useReset } = usePacients();
	return <Button onClick={useReset}>Resetar</Button>;
};
