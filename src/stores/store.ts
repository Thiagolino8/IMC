import axios from 'axios'; import create from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { persist, devtools } from 'zustand/middleware'

export interface Pacient {
	nome: string;
	peso: number;
	altura: number;
	gordura: number;
	imc: number;
}

interface PacientStore {
	pacients: Pacient[];
	filteredPacients: Pacient[];
	filter: string;
	reset: () => void;
	add: (pacients: Pacient[]) => void;
	deletePacient: (nome: string) => void;
	setFilter: (filter: string) => void;
	doIMC: (pacient: Pacient) => Pacient;
}

const initialPacients: Pacient[] = [
	{ nome: 'Paulo', peso: 100, altura: 2.0, gordura: 10, imc: 0 },
	{ nome: 'João', peso: 80, altura: 1.72, gordura: 40, imc: 0 },
	{ nome: 'Maria', peso: 40, altura: 1.64, gordura: 14, imc: 0 },
	{ nome: 'Douglas', peso: 85, altura: 1.73, gordura: 24, imc: 0 },
	{ nome: 'Tatiana', peso: 46, altura: 1.55, gordura: 19, imc: 0 },
];
export const useStore = create<PacientStore>()(
		immer(
			persist(
				devtools((set) => ({
					pacients: initialPacients,
					filteredPacients: [],
					filter: '',
					reset: () => set((state) => ({ pacients: initialPacients.map((pacient) => state.doIMC(pacient)) })),
					add: (newPacients: Pacient[]) =>
						set((state) => {
							let jaExiste = false;
							state.pacients.forEach((pacient) => {
								newPacients.forEach((newPacient) => {
									if (pacient.nome === newPacient.nome) {
										jaExiste = true;
										newPacients = newPacients.filter((pac) => pac.nome !== pacient.nome);
									}
								});
							});
							if (!jaExiste) {
								newPacients = newPacients.map((pacient) => state.doIMC(pacient));
							} else {
								alert('Paciente(s) já existente(s) na tabela');
							}
							return { pacients: [...state.pacients, ...newPacients] };
						}),
					deletePacient: (nome: string) => {
						set((state) => ({
							pacients: state.pacients.filter((pacient) => pacient.nome !== nome),
						}));
					},
					setFilter: (filter: string) => {
						set(() => ({
							filter
						}));
					},
					doIMC: (pacient: Pacient) => ({ ...pacient, imc: pacient.peso / pacient.altura ** 2 }),
				})), {name: 'pacientStore'})))


export const fetcher = async () => {
	const response = await fetch('https://api-pacientes.herokuapp.com/pacientes');
	const form = await response.json();
	useStore.getState().add(form);
}

export const axiosFetcher = async () => {
	const form = await axios.get('https://api-pacientes.herokuapp.com/pacientes');
	useStore.getState().add(form.data);
};