import { BoxFormContent } from "../../styles/styles-modules";
import Input from "../input";

export const ResponsibleForm = () => {
  return (
    <>
      <h3>Dados do Responsável</h3>
      <BoxFormContent gridTemplateColumns="1fr 1fr 1fr 1fr">
        <Input
          label="Nome"
          name="responsavel.nome"
          required
          placeholder="Digite o nome"
        />
        <Input
          label="Sobrenome"
          name="responsavel.sobrenome"
          required
          placeholder="Digite o sobrenome"
        />
        <Input
          label="Data de Nascimento"
          name="responsavel.dataNascimento"
          required
          type="date"
        />
        <Input
          label="CPF"
          name="responsavel.cpf"
          required
          placeholder="Digite o CPF"
          mask="999.999.999-99"
        />
      </BoxFormContent>
    </>
  );
};

export default ResponsibleForm;
