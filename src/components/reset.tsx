import { useStore } from '../stores/store';
import { Button } from '../styles/button';

export const Reset = () => {
	const { reset } = useStore();
	return <Button onClick={reset}>Resetar</Button>;
};
