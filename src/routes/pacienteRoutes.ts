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

router.post('/pacientes', criarPaciente);
router.get('/pacientes', listarPacientes);
router.get('/pacientes/:id', obterPaciente);
router.get('/paciente/cpf/:cpf', obterPacientePorCPF);
router.put('/paciente/cpf/:cpf', atualizarPacientePorCPF);
router.delete('/pacientes/:id', excluirPaciente);

export default router;
