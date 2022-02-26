import { Pacient } from "./usePacients";

export const calcIMC = ({peso, altura}: Pacient) => peso / altura ** 2;
