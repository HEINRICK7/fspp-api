import { Router } from 'express';
import {
  criarPaciente,
  listarPacientes,
  obterPaciente,
  excluirPaciente,
  obterPacientePorCPF,
  atualizarPacientePorCPF
} from '../controllers/pacienteController';

const router = Router();

router.post('/pacientes', criarPaciente); // Criar um novo paciente
router.get('/pacientes', listarPacientes); // Listar todos os pacientes
router.get('/pacientes/:id', obterPaciente); // Obter um paciente pelo ID
router.get('/paciente/cpf/:cpf', obterPacientePorCPF);
router.put('/paciente/cpf/:cpf', atualizarPacientePorCPF);
router.delete('/pacientes/:id', excluirPaciente); // Excluir um paciente pelo ID

export default router;
