import Head from 'next/head';
import { PacientsTable } from '../components/lista';
import { PacientsProvider } from '../hooks/usePacients';
import { Search } from '../components/search';
import { Reset } from '../components/reset';
import { AddPacient } from '../components/addPacient';
import { Container } from '../styles/container';
import { Header } from '../styles/header';
import { BtnsContainer } from '../styles/btnsContainer';

const Home = () => {
	return (
		<div>
			<Head>
				<title>IMC</title>
				<meta name='description' content='IMC Health Table' />
				<link rel='icon' href='/favicon.svg' />
			</Head>
			<PacientsProvider>
				<Container>
					<Header>
						<h1>Tabela de Pacientes</h1>
						<h2>Duplo Click em Um Paciente para excluí-lo</h2>
					</Header>
					<BtnsContainer>
						<Search />
						<Reset />
					</BtnsContainer>
					<PacientsTable />
				</Container>
				<AddPacient />
			</PacientsProvider>
		</div>
	);
};

export default Home;