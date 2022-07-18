import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import shallow from 'zustand/shallow'
import { Pacient, useStore } from '../stores/store'

export const AddPacient = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { isSubmitSuccessful },
	} = useForm<Pacient>()
	const { add, doIMC } = useStore(state => ({add: state.add, doIMC: state.doIMC}), shallow)
	useEffect(() => {
		if (isSubmitSuccessful) {
			reset({
				nome: '',
				peso: '' as unknown as number,
				altura: '' as unknown as number,
				gordura: '' as unknown as number,
			})
		}
	}, [isSubmitSuccessful, reset])
	const handleSubmitForm = (data: Pacient) => {
		data.nome = data.nome
			.toLowerCase()
			.split(' ')
			.map(function (word) {
				return word.charAt(0).toUpperCase() + word.slice(1)
			})
			.join(' ')
		data.peso = Number(data.peso)
		data.altura = Number(data.altura)
		data.gordura = Number(data.gordura)
		data = doIMC(data)
		add([data])
	}
	return (
		<div className='flex flex-col w-full'>
			<h2 id='titulo-form' className='my-3 text-3xl font-bold'>
				Adicionar novo paciente
			</h2>
			<ul id='mensagens-erro'></ul>
			<form
				id='form-adiciona'
				className='flex flex-col items-end w-full'
				onSubmit={handleSubmit((data) => handleSubmitForm(data))}
			>
				<div className='grid w-full grid-flow-row grid-cols-1 gap-3 md:grid-cols-2'>
					<div className='flex flex-col'>
						<label className='label' htmlFor='nome'>Nome:</label>
						<input
							className='block w-full input input-bordered input-primary'
							id='nome'
							{...register('nome')}
							type='text'
							placeholder='Digite o nome do seu paciente'
							required
						/>
					</div>
					<div className='flex flex-col'>
						<label className='label' htmlFor='peso'>Peso em Kg:</label>
						<input
							className='block w-full input input-bordered input-primary'
							id='peso'
							{...register('peso')}
							type='number'
							placeholder='Digite o Peso'
							required
						/>
					</div>
					<div className='flex flex-col'>
						<label className='label' htmlFor='altura'>Altura em Metros:</label>
						<input
							className='block w-full input input-bordered input-primary'
							id='altura'
							{...register('altura')}
							type='number'
							step='0.01'
							placeholder='Digite a Altura'
							required
						/>
					</div>
					<div className='flex flex-col'>
						<label className='label' htmlFor='gordura'>% de Gordura:</label>
						<input
							className='block w-full input input-bordered input-primary'
							id='gordura'
							{...register('gordura')}
							type='number'
							placeholder='Digite a Porcentagem de Gordura'
							required
						/>
					</div>
				</div>
				<button className='my-4 btn btn-primary' type='submit'>
					Adicionar
				</button>
			</form>
		</div>
	)
}
