import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useStore } from '../stores/store';
import { GlobalStyle } from '../styles/global';


const MyApp = ({ Component, pageProps }: AppProps) => {
	const { pacients, reset, setFilter} = useStore();
	useEffect(() => {
		reset();
	}, []);
	useEffect(() => {
		setFilter('');
	}, [pacients]);
	return (
	<>
		<GlobalStyle />
		<Component {...pageProps} />
	</>
)};

export default MyApp;
