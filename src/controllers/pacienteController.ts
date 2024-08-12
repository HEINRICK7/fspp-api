import { Request, Response } from 'express';
import Paciente, { IPaciente } from '../models/Paciente';

// Criar um novo paciente
export const criarPaciente = async (req: Request, res: Response): Promise<Response> => {
  try {
    const {
      nome,
      cpf,
      sexo,
      estadoCivil,
      idade,
      naturalidade,
      profissao,
      nomeMae,
      nomePai,
      endereco,
      ams,
      dataRegistro,
      servicosPrestados,
    } = req.body;

    const novoPaciente: IPaciente = new Paciente({
      nome,
      cpf,
      sexo,
      estadoCivil,
      idade,
      naturalidade,
      profissao,
      nomeMae,
      nomePai,
      endereco,
      ams,
      dataRegistro,
      servicosPrestados, // Adicionando os serviços prestados
    });

    await novoPaciente.save();

    return res.status(201).json(novoPaciente);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao criar paciente', error });
  }
};


// Listar todos os pacientes
export const listarPacientes = async (req: Request, res: Response): Promise<Response> => {
  try {
    const pacientes = await Paciente.find();
    return res.status(200).json(pacientes);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao listar pacientes', error });
  }
};


// Obter um paciente pelo ID
export const obterPaciente = async (req: Request, res: Response): Promise<Response> => {
  try {
    const paciente = await Paciente.findById(req.params.id);
    if (!paciente) {
      return res.status(404).json({ message: 'Paciente não encontrado' });
    }
    return res.status(200).json(paciente);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao obter paciente', error });
  }
};
// Obter paciente pelo CPF
export const obterPacientePorCPF = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { cpf } = req.params;
    const paciente = await Paciente.findOne({ cpf });

    if (!paciente) {
      return res.status(404).json({ message: 'Paciente não encontrado' });
    }

    return res.status(200).json(paciente);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao buscar paciente', error });
  }
};

// Atualizar um paciente pelo CPF
export const atualizarPacientePorCPF = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { cpf } = req.params;
    const pacienteAtualizado = await Paciente.findOneAndUpdate({ cpf }, req.body, { new: true });

    if (!pacienteAtualizado) {
      return res.status(404).json({ message: 'Paciente não encontrado' });
    }

    return res.status(200).json(pacienteAtualizado);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao atualizar paciente', error });
  }
};


// Excluir um paciente pelo ID
export const excluirPaciente = async (req: Request, res: Response): Promise<Response> => {
  try {
    const pacienteExcluido = await Paciente.findByIdAndDelete(req.params.id);
    if (!pacienteExcluido) {
      return res.status(404).json({ message: 'Paciente não encontrado' });
    }
    return res.status(200).json({ message: 'Paciente excluído com sucesso' });
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao excluir paciente', error });
  }
};
