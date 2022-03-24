import { useStore } from '../stores/store';
import { Table } from '../styles/table';
import { Td } from '../styles/td';
import { Th } from '../styles/th';

export const PacientsTable = () => {
	const { filteredPacients, deletePacient } = useStore();
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
				{filteredPacients.map(({ nome, peso, altura, gordura, imc }) => (
					<tr key={nome} onDoubleClick={() => deletePacient(nome)}>
						<Td>{nome}</Td>
						<Td>{peso.toFixed(2)}</Td>
						<Td>{altura.toFixed(2)}</Td>
						<Td>{gordura.toFixed(2)}</Td>
						<Td>{imc.toFixed(2)}</Td>
					</tr>
				))}
			</tbody>
		</Table>
	);
};