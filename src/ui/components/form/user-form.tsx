import { Form, Formik } from "formik";
import useCreateUser from "../../../services/hooks/use-create-user";
import { User } from "../../../data/types/user";
import useUpdateUser from "../../../services/hooks/use-update-user";
import FormInputs from "./form-inputs";
import { date, object, string } from "yup";
import { useState } from "react";
import { age } from "../../helpers/age";

type Props = {
  defaultValues?: User;
  onClose: () => void;
  type: "CREATE" | "EDIT";
};

export const UserForm = (props: Props) => {
  const { mutate: createMutate } = useCreateUser();
  const { mutate: updateMutate } = useUpdateUser();

  const [confirmUpdate, setConfirmUpdate] = useState(false);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);

  return (
    <>
      <Formik
        initialValues={
          props.defaultValues ?? {
            nome: "",
            sobrenome: "",
            dataNascimento: "",
            cpf: "",
            email: "",
            telefoneContato: "",
            peso: "",
            altura: "",
            cep: "",
            bairro: "",
            cidade: "",
            complemento: "",
            logradouro: "",
            numero: "",
            uf: "",
            responsavel: {
              nome: "",
              sobrenome: "",
              dataNascimento: "",
              cpf: "",
            },
          }
        }
        validationSchema={validationSchema}
        onSubmit={(values) => {
          if (props.type === "EDIT" && !confirmUpdate) {
            setOpenConfirmModal(true);
            return;
          }

          if (props.type === "EDIT" && confirmUpdate) {
            updateMutate(values);
            props.onClose();
            setConfirmUpdate(false);
            return;
          }

          createMutate(values);
          props.onClose();
          return;
        }}
      >
        <Form>
          <FormInputs
            onClose={props.onClose}
            type={props.type}
            setConfirmUpdate={setConfirmUpdate}
            setOpenConfirmModal={setOpenConfirmModal}
            openConfirmModal={openConfirmModal}
          />
        </Form>
      </Formik>
    </>
  );
};

export default UserForm;

const validationSchema = object().shape({
  nome: string().required("Campo obrigatório"),
  sobrenome: string().required("Campo obrigatório"),
  dataNascimento: date()
    .max(new Date(), "Não é possível inserir uma data futura")
    .required("Campo obrigatório"),
  cpf: string().required("Campo obrigatório"),
  email: string().email("E-mail inválido").required("Campo obrigatório"),
  telefoneContato: string().required("Campo obrigatório"),
  peso: string().required("Campo obrigatório"),
  altura: string().required("Campo obrigatório"),
  cep: string().required("Campo obrigatório"),
  bairro: string().required("Campo obrigatório"),
  cidade: string().required("Campo obrigatório"),
  logradouro: string().required("Campo obrigatório"),
  numero: string().required("Campo obrigatório"),
  uf: string().required("Campo obrigatório"),
  responsavel: object().when("dataNascimento", (dataNascimento, schema) => {
    const idade = age(dataNascimento);
    if (!isNaN(idade) && idade < 18) {
      return schema.required().shape({
        nome: string().required("Campo obrigatório"),
        sobrenome: string().required("Campo obrigatório"),
        dataNascimento: date().required("Campo obrigatório"),
        cpf: string().required("Campo obrigatório"),
      });
    }
    return schema.nullable();
  }),
});
