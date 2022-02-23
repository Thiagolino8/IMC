import Head from 'next/head';
import Tabela from '../components/lista';
import { PacientsProvider } from '../hooks/usePacients';
import Buscar from '../components/buscar';
import handleFetchCall from '../hooks/useFetch';
import HandleFetchCall from '../hooks/useFetch';


const Home = () => {
	return (
		<div>
			<Head>
				<title>Fetcher</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.svg' />
			</Head>
			<h1>Home</h1>
			<PacientsProvider>
				<Tabela />
				<HandleFetchCall />
			</PacientsProvider>
		</div>
	);
};

export default Home;
