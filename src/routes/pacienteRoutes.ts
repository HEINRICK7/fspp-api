import { Router } from 'express';
import {
  criarPaciente,
  listarPacientes,
  obterPaciente,
  atualizarPaciente,
  excluirPaciente
} from '../controllers/pacienteController';

const router = Router();

router.post('/pacientes', criarPaciente); // Criar um novo paciente
router.get('/pacientes', listarPacientes); // Listar todos os pacientes
router.get('/pacientes/:id', obterPaciente); // Obter um paciente pelo ID
router.put('/pacientes/:id', atualizarPaciente); // Atualizar um paciente pelo ID
router.delete('/pacientes/:id', excluirPaciente); // Excluir um paciente pelo ID

export default router;
