import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from 'react';
import calcIMC from './useIMC';

export interface Paciente {
	nome: string;
	peso: number;
	altura: number;
	gordura: number;
	imc: number;
};


export interface Provider {
	pacientes: Paciente[];
	useAdd: (paciente: Paciente[]) => void;
}

export const PacientesContext = createContext({} as Provider);
export const usePacients = () => useContext(PacientesContext);

export const PacientsProvider = ({ children }: { children: ReactNode }) => {
	const [pacientes, setPacientes] = useState([
		{ nome: 'Paulo', peso: 100, altura: 2.00, gordura: 10, imc: 0 },
		{ nome: 'João', peso: 80, altura: 1.72, gordura: 40, imc: 0 },
		{ nome: 'Maria', peso: 40, altura: 1.64, gordura: 14, imc: 0 },
		{ nome: 'Douglas', peso: 85, altura: 1.73, gordura: 24, imc: 0 },
		{ nome: 'Tatiana', peso: 46, altura: 1.55, gordura: 19, imc: 0 },
	]);

	useEffect(() => {
		const novoArray = pacientes.map(paciente => {
			const imc = calcIMC(paciente)
			return { ...paciente, imc };
		})
		setPacientes(novoArray);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	const useAdd = (paciente: Paciente[]) => {
		setPacientes((oldArray) => [...oldArray, ...paciente]);
	};

	return <PacientesContext.Provider value={{ pacientes, useAdd }}>{children}</PacientesContext.Provider>;
};

