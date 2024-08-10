import mongoose, { Schema, Document } from 'mongoose';

export interface IPaciente extends Document {
  nome: string;
  email: string;
  telefone: string;
  dataNascimento: Date;
}

const PacienteSchema: Schema = new Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  telefone: { type: String, required: true },
  dataNascimento: { type: Date, required: true },
});

export default mongoose.model<IPaciente>('Paciente', PacienteSchema);
