import { useEffect, useState } from 'react';
import { usePacients, Pacient } from '../hooks/usePacients';
import { Button } from '../styles/button';
import { Input } from '../styles/input';
import { InputMedio } from '../styles/inputMedio';
import { Container } from '../styles/container';
import { FormArea } from '../styles/formArea';
import { useForm } from 'react-hook-form';
import { calcIMC } from '../hooks/useIMC';


export const AddPacient = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { isSubmitSuccessful }
	} = useForm<Pacient>();
	const { handleAdd } = usePacients();
  useEffect(() => {
		if (isSubmitSuccessful) {
			reset({
				nome: '',
				peso: '',
				altura: '',
				gordura: '',
			});
		}
	}, [isSubmitSuccessful, reset]);
	const handleSubmitForm = (data: Pacient) => { 
			data.nome = data.nome
				.toLowerCase()
				.split(' ')
				.map(function (word) {
					return word.charAt(0).toUpperCase() + word.slice(1);
				})
				.join(' ');
			data.peso = Number(data.peso);
			data.altura = Number(data.altura);
			data.gordura = Number(data.gordura);
		data.imc = calcIMC(data);
		handleAdd([data]);
	}
	return (
		<Container>
			<h2 id='titulo-form'>Adicionar novo paciente</h2>
			<ul id='mensagens-erro'></ul>
			<form id='form-adiciona' onSubmit={handleSubmit((data) => handleSubmitForm(data))}>
				<FormArea>
					<label htmlFor='nome'>Nome:</label>
					<Input id='nome' {...register('nome')} type='text' placeholder='digite o nome do seu paciente' required/>
				</FormArea>
				<FormArea>
					<label htmlFor='peso'>Peso:</label>
					<InputMedio id='peso' {...register('peso')} type='number' placeholder='digite o peso do seu paciente' required/>
				</FormArea>
				<FormArea>
					<label htmlFor='altura'>Altura:</label>
					<InputMedio
						id='altura'
						{...register('altura')}
						type='number'
						step='0.01'
						placeholder='digite a altura do seu paciente'
						required
					/>
				</FormArea>
				<FormArea>
					<label htmlFor='gordura'>% de Gordura:</label>
					<InputMedio
						id='gordura'
						{...register('gordura')}
						type='number'
						placeholder='digite a porcentagem de gordura do seu paciente'
						required
					/>
				</FormArea>

				<Button type='submit'>Adicionar</Button>
			</form>
		</Container>
	);
};