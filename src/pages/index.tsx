import Head from 'next/head'
import { AddPacient } from '../components/addPacient'
import { PacientsTable } from '../components/pacientsTable'
import { Search } from '../components/search'
import { TableBtns } from '../components/tableBtns'

const Home = () => (
	<>
		<Head>
			<title>IMC</title>
			<meta name='description' content='IMC Health Table' />
			<link rel='mask/icon' href='/favicon.svg' />
		</Head>
		<div className='flex flex-col items-center min-h-screen bg-gray-900 py-7'>
			<div className='flex flex-col items-center w-full gap-5 px-3 md:w-fit'>
				<div className='flex flex-col items-center justify-center text-center'>
					<h1 className='text-4xl font-bold'>Tabela de Pacientes</h1>
					<h2 className='text-xl'>Duplo click em um paciente para excluí-lo</h2>
				</div>
				<TableBtns />
				<Search />
				<PacientsTable />
				<AddPacient />
			</div>
		</div>
	</>
)

export default Home
