import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from 'react';
import { calcIMC } from './useIMC';

export interface Pacient {
	nome: string;
	peso: number;
	altura: number;
	gordura: number;
	imc: number;
}

export interface Provider {
	pacients: Pacient[];
	useAdd: (pacient: Pacient[]) => void;
	useReset: () => void;
	handleDelete: (nome: string) => void;
}

const initialPacients: Pacient[] = [
	{ nome: 'Paulo', peso: 100, altura: 2.0, gordura: 10, imc: 0 },
	{ nome: 'João', peso: 80, altura: 1.72, gordura: 40, imc: 0 },
	{ nome: 'Maria', peso: 40, altura: 1.64, gordura: 14, imc: 0 },
	{ nome: 'Douglas', peso: 85, altura: 1.73, gordura: 24, imc: 0 },
	{ nome: 'Tatiana', peso: 46, altura: 1.55, gordura: 19, imc: 0 },
];

export const PacientsContext = createContext({} as Provider);
export const usePacients = () => useContext(PacientsContext);

export const PacientsProvider = ({ children }: { children: ReactNode }) => {
	const [pacients, setPacientes] = useState(initialPacients);

	useEffect(() => {
		const newArray = pacients.map((pacient) => {
			const imc = calcIMC(pacient);
			return { ...pacient, imc };
		});
		setPacientes(newArray);
	}, [pacients]);

	const useReset = () => {
		setPacientes(initialPacients);
	};

	const useAdd = (pacient: Pacient[]) => {
		setPacientes((oldArray) => [...oldArray, ...pacient]);
	};

	const handleDelete = (nome: string) => {
		setPacientes((oldArray) => oldArray.filter((p) => p.nome !== nome));
	};

	return (
		<PacientsContext.Provider value={{ pacients, useReset, useAdd, handleDelete }}>{children}</PacientsContext.Provider>
	);
};
