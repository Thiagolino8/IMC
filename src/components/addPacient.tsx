import { useState } from "react"
import { Pacient } from "../hooks/usePacients"
import { Button } from "../styles/button"
import { Campo } from "../styles/campo"
import { CampoMedio } from "../styles/campoMedio"
import { Container } from "../styles/container"
import { Input } from "../styles/input"

export const AddPacient = () => {
  const [newPacient, setNewPacient] = useState({} as Pacient)
  return (
		<Container>
			<h2 id='titulo-form'>Adicionar novo paciente</h2>
			<ul id='mensagens-erro'></ul>
			<form id='form-adiciona'>
				<Input>
					<label htmlFor='nome'>Nome:</label>
					<Campo id='nome' name='nome' type='text' placeholder='digite o nome do seu paciente' />
				</Input>
				<Input>
					<label htmlFor='peso'>Peso:</label>
					<CampoMedio id='peso' name='peso' type='text' placeholder='digite o peso do seu paciente' />
				</Input>
				<Input>
					<label htmlFor='altura'>Altura:</label>
					<CampoMedio id='altura' name='altura' type='text' placeholder='digite a altura do seu paciente' />
				</Input>
				<Input>
					<label htmlFor='gordura'>% de Gordura:</label>
						<CampoMedio
							id='gordura'
							name='gordura'
							type='text'
							placeholder='digite a porcentagem de gordura do seu paciente'
						/>
				</Input>

				<Button>
					Adicionar
				</Button>
			</form>
		</Container>
	);
}