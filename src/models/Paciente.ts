import { Schema, model, Document } from 'mongoose';

// Interface para os Serviços Prestados
interface IService {
  date: Date;
  responsible: string;
  description: string;
}

// Interface para o Paciente
export interface IPaciente extends Document {
  nome: string;
  cpf: string;
  sexo: string;
  estadoCivil: string;
  idade: number;
  naturalidade: string;
  profissao: string;
  nomeMae: string;
  nomePai: string;
  endereco: {
    rua: string;
    numero: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
  };
  ams: string;
  dataRegistro: Date;
  servicosPrestados: IService[]; // Adicionando serviços prestados ao modelo
}

const ServiceSchema = new Schema<IService>({
  date: { type: Date, required: true },
  responsible: { type: String, required: true },
  description: { type: String, required: true },
});

const PacienteSchema = new Schema({
  nome: { type: String, required: true },
  cpf: { type: String, required: true, unique: true },
  sexo: { type: String, required: true },
  estadoCivil: { type: String, required: false },
  idade: { type: Number, required: false },
  naturalidade: { type: String, required: false },
  profissao: { type: String, required: false },
  nomeMae: { type: String, required: false },
  nomePai: { type: String, required: false },
  endereco: {
    rua: { type: String, required: true },
    numero: { type: String, required: true },
    bairro: { type: String, required: true },
    cidade: { type: String, required: true },
    estado: { type: String, required: true },
    cep: { type: String, required: true },
  },
  ams: { type: String, required: true },
  dataRegistro: { type: Date, required: true },
  servicosPrestados: { type: [ServiceSchema], required: false }, // Relacionando o array de serviços prestados
});

export default model<IPaciente>('Paciente', PacienteSchema);
