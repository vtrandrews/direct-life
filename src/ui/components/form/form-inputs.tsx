import { useFormikContext } from "formik";
import {
  BoxButtonContent,
  BoxFormContent,
  Button,
} from "../../styles/styles-modules";
import Input from "../input";
import ResponsibleForm from "./responsible-form";
import { User } from "../../../data/types/user";
import { useEffect, useState } from "react";
import Modal from "../modal";
import { age } from "../../helpers/age";

type Props = {
  onClose: () => void;
  type: "CREATE" | "EDIT";
  setConfirmUpdate: (value: boolean) => void;
  setOpenConfirmModal: (value: boolean) => void;
  openConfirmModal: boolean;
};

export const FormInputs = (props: Props) => {
  const { setConfirmUpdate, setOpenConfirmModal, openConfirmModal } = props;
  const { values, setFieldValue, submitForm } = useFormikContext<User>();

  const [isAdult, setIsAdult] = useState(true);

  const handleConfirmUpdate = () => {
    setConfirmUpdate(true);
    setOpenConfirmModal(false);
    submitForm();
  };

  const fetchCepData = async (cep: string) => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json`);
      const data = await response.json();

      setFieldValue("logradouro", data.logradouro);
      setFieldValue("bairro", data.bairro);
      setFieldValue("cidade", data.localidade);
      setFieldValue("localidade", data.localidade);
      setFieldValue("uf", data.uf);
    } catch (error) {
      console.error("Erro ao buscar dados do CEP:", error);
    }
  };

  useEffect(() => {
    if (!values.dataNascimento) return;

    if (age(values.dataNascimento) >= 18) {
      setIsAdult(true);
      return;
    } else {
      setIsAdult(false);
    }
  }, [values.dataNascimento]);

  return (
    <>
      <BoxFormContent gridTemplateColumns="1fr 1fr 1fr 1fr">
        <Input label="Nome" name="nome" required placeholder="Digite o nome" />
        <Input
          label="Sobrenome"
          name="sobrenome"
          required
          placeholder="Digite o sobrenome"
        />
        <Input
          label="Data de Nascimento"
          name="dataNascimento"
          type="date"
          required
        />
        <Input
          label="CPF"
          name="cpf"
          required
          placeholder="Ex.: 000.000.000-00"
          mask="999.999.999-99"
        />
      </BoxFormContent>
      <BoxFormContent gridTemplateColumns="1fr 1fr 1fr 1fr">
        <Input
          label="Telefone de Contato"
          name="telefoneContato"
          required
          placeholder="Ex.: (00) 00000-0000"
          mask="(99) 99999-9999"
        />
        <Input
          label="E-mail"
          name="email"
          required
          placeholder="Digite o e-mail"
        />
        <Input
          label="Peso"
          name="peso"
          required
          placeholder="Ex.: 60.75kg"
          mask="99.99"
        />
        <Input
          label="Altura"
          name="altura"
          required
          placeholder="Ex.: 1.65cm"
          mask="9.99"
        />
      </BoxFormContent>
      <BoxFormContent gridTemplateColumns="1fr 1fr 1fr 1fr">
        <Input
          label="CEP"
          name="cep"
          required
          cepSearch={fetchCepData}
          placeholder="Ex.: 00000-000"
          mask="99999-999"
        />
        <Input
          label="Bairro"
          name="bairro"
          required
          placeholder="Digite o bairro"
        />
        <Input
          label="Cidade"
          name="cidade"
          required
          placeholder="Digite a cidade"
        />
        <Input
          label="Logradouro"
          name="logradouro"
          required
          placeholder="Digite o logradouro"
        />
      </BoxFormContent>
      <BoxFormContent gridTemplateColumns="2fr 1fr 1fr">
        <Input
          label="Complemento"
          name="complemento"
          placeholder="Digite o complemento (Opcional)"
        />
        <Input
          label="Número"
          name="numero"
          required
          placeholder="Digite o número"
        />
        <Input
          label="UF"
          name="uf"
          required
          placeholder="Digite o Estado"
          mask="aa"
        />
      </BoxFormContent>

      {!isAdult && <ResponsibleForm />}

      <BoxButtonContent>
        <Button variant="secondary" onClick={() => props.onClose()}>
          Cancelar
        </Button>
        <Button variant="primary" type="submit">
          Confirmar
        </Button>
      </BoxButtonContent>

      <Modal
        isOpen={openConfirmModal}
        onClose={() => setOpenConfirmModal(false)}
        title="Confirmar Alterações"
      >
        <div>
          <h4>Deseja realmente alterar os dados?</h4>
          <BoxButtonContent>
            <Button
              variant="secondary"
              onClick={() => setOpenConfirmModal(false)}
            >
              Cancelar
            </Button>
            <Button
              variant="primary"
              type="button"
              onClick={handleConfirmUpdate}
            >
              Confirmar
            </Button>
          </BoxButtonContent>
        </div>
      </Modal>
    </>
  );
};

export default FormInputs;
