import Head from 'next/head';
import { PacientsTable } from '../components/pacientsTable';
import { TableBtns } from '../components/tableBtns';
import { AddPacient } from '../components/addPacient';
import { Container } from '../styles/container';
import { Header } from '../styles/header';
import { BtnsContainer } from '../styles/btnsContainer';
import { Search } from '../components/search';

const Home = () => {
	return (
		<div>
			<Head>
				<title>IMC</title>
				<meta name='description' content='IMC Health Table' />
				<link rel='icon' href='/favicon.svg' />
			</Head>
			<Container>
				<Header>
					<h1>Tabela de Pacientes</h1>
					<h2>Duplo Click em Um Paciente para excluí-lo</h2>
				</Header>
				<BtnsContainer>
					<TableBtns />
				</BtnsContainer>
				<Search />
				<PacientsTable />
			</Container>
			<AddPacient />
		</div>
	);
};

export default Home;