import { Paciente } from "./usePacients";

const calcIMC = ({peso, altura}: Paciente) => peso / altura ** 2;

export default calcIMC;