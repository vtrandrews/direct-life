import { Responsible } from "./responsible";

export type User = {
  nome: string;
  sobrenome: string;
  dataNascimento: string;
  cpf: string;
  peso: string;
  altura: string;
  email: string;
  telefoneContato: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cep: string;
  cidade: string;
  uf: string;
  responsavel?: Responsible;
};