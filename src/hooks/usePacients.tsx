import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useCallback,
	useContext,
	useEffect,
	useState,
} from 'react';
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
	handleAdd: (pacient: Pacient[]) => void;
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
	const [pacients, setPacients] = useState(initialPacients);

	const fixIMC = () => {
		setPacients((oldArray) => {
			return oldArray.map((pacient) => {
				const imc = calcIMC(pacient);
				return { ...pacient, imc };
			}, []);
		});
	};

	const useReset = () => {
		setPacients(initialPacients);
		fixIMC();
	};

	const handleAdd = (newPacients: Pacient[]) => {
		let jaExiste = false
		pacients.forEach((pacient) => {
			newPacients.forEach((newPacient) => {
				if (pacient.nome === newPacient.nome) {
					jaExiste = true;
				}
			})
		})
		if (!jaExiste) {
			setPacients((oldArray) => [...oldArray, ...newPacients]);
		} else {
			alert('O(s) paciente(s) já existe(m) na tabela')
		}
	};

	const handleDelete = (nome: string) => {
		setPacients((oldArray) => oldArray.filter((p) => p.nome !== nome));
	};

	useEffect(() => {
		fixIMC();
	}, []);

	return (
		<PacientsContext.Provider value={{ pacients, useReset, handleAdd, handleDelete }}>
			{children}
		</PacientsContext.Provider>
	);
};
