import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import create from 'zustand';
import { calcIMC } from './useIMC';

export interface Pacient {
	nome: string;
	peso: number;
	altura: number;
	gordura: number;
	imc: number;
}

interface PacientStore {
	pacients: Pacient[];
	reset: () => void;
	add: (pacients: Pacient[]) => void;
	deletePacient: (nome: string) => void;
	doIMC: (pacients: Pacient[]) => Pacient[];
}

const initialPacients: Pacient[] = [
	{ nome: 'Paulo', peso: 100, altura: 2.0, gordura: 10, imc: 0 },
	{ nome: 'João', peso: 80, altura: 1.72, gordura: 40, imc: 0 },
	{ nome: 'Maria', peso: 40, altura: 1.64, gordura: 14, imc: 0 },
	{ nome: 'Douglas', peso: 85, altura: 1.73, gordura: 24, imc: 0 },
	{ nome: 'Tatiana', peso: 46, altura: 1.55, gordura: 19, imc: 0 },
];

export const useStore = create<PacientStore>((set) => ({
	pacients: initialPacients,
	reset: () => set(state => ({ pacients: state.doIMC(initialPacients) })),
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
				state.doIMC(newPacients);
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
	doIMC: (pacients: Pacient[]) => pacients.map((pacient) => ({ ...pacient, imc: pacient.peso / pacient.altura ** 2 })),
}));
