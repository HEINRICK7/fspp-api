import mongoose, { Schema, Document } from 'mongoose';

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
  servicosPrestados: {
    date: Date;
    responsible: string;
    description: string;
  }[];
  email?: string; // Torne o campo opcional, sem 'unique: true'
}

const PacienteSchema: Schema = new Schema({
  nome: { type: String, required: true },
  cpf: { type: String, required: true, unique: true },
  sexo: { type: String, required: true },
  estadoCivil: { type: String, required: true },
  idade: { type: Number, required: true },
  naturalidade: { type: String, required: true },
  profissao: { type: String, required: true },
  nomeMae: { type: String, required: true },
  nomePai: { type: String, required: true },
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
  servicosPrestados: [
    {
      date: { type: Date, required: true },
      responsible: { type: String, required: true },
      description: { type: String, required: true },
    }
  ],
  email: { type: String } // Sem 'unique: true'
});

export default mongoose.model<IPaciente>('Paciente', PacienteSchema);
