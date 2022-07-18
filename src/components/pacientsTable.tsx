import shallow from 'zustand/shallow'
import { useStore } from '../stores/store'

export const PacientsTable = () => {
	const { deletePacient, filteredPacients } = useStore(
		(state) => ({
			deletePacient: state.deletePacient,
			filteredPacients: state.pacients.filter((pacient) =>
				pacient.nome.toLowerCase().includes(state.filter.toLowerCase())
			),
		}),
		shallow
	)
	return (
		<div className='w-full overflow-x-auto'>
			<table className='table w-full'>
				<thead>
					<tr>
						<th>Nome</th>
						<th>Peso(kg)</th>
						<th>Altura(m)</th>
						<th>Gordura Corporal(%)</th>
						<th>IMC</th>
					</tr>
				</thead>
				<tbody>
					{filteredPacients.map(({ nome, peso, altura, gordura, imc }) => (
						<tr className='hover' key={nome} onDoubleClick={() => deletePacient(nome)}>
							<td>{nome}</td>
							<td>{peso.toFixed(2)}</td>
							<td>{altura.toFixed(2)}</td>
							<td>{gordura.toFixed(2)}</td>
							<td>{imc.toFixed(2)}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
