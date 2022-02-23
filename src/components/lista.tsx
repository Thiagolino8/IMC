import {usePacients} from '../hooks/usePacients';
import Table from '../styles/table';
import Td from '../styles/td';
import Th from '../styles/th';

const Tabela = () => {
	const { pacientes } = usePacients();
	return (
		<Table>
			<thead>
				<tr>
					<Th>Nome</Th>
					<Th>Peso(kg)</Th>
					<Th>Altura(m)</Th>
					<Th>Gordura Corporal(%)</Th>
					<Th>IMC</Th>
				</tr>
			</thead>
			<tbody>
				{pacientes.map(({ nome, peso, altura, gordura, imc }) => (
					<tr key={nome}>
						<Td>{nome}</Td>
						<Td>{peso}</Td>
						<Td>{altura}</Td>
						<Td>{gordura}</Td>
						<Td>{imc.toFixed(2)}</Td>
					</tr>
				))}
			</tbody>
		</Table>
	);
};

export default Tabela;