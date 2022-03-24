import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useStore } from '../stores/store';
import { GlobalStyle } from '../styles/global';


const MyApp = ({ Component, pageProps }: AppProps) => {
	const { reset } = useStore();
	useEffect(() => {
		reset();
	}, []);
	return (
	<>
		<GlobalStyle />
		<Component {...pageProps} />
	</>
)};

export default MyApp;
