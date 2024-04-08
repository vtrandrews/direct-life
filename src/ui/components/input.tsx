import { ErrorMessage, Field } from "formik";
import { BoxFormItem, Error, Required } from "../styles/styles-modules";
import ReactInputMask from "react-input-mask";

type Props = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  mask?: string;
  cepSearch?: (cep: string) => void;
};

const Input = (props: Props) => {
  const { name, label, required, type, placeholder, mask, cepSearch } = props;

  const handleBlur = (e: { target: { value: string } }) => {
    if (cepSearch && name === "cep") {
      cepSearch(e.target.value);
    }
  };

  return (
    <BoxFormItem>
      <label>
        {label}
        {required && <Required>*</Required>}
      </label>
      <Field
        as={ReactInputMask}
        mask={mask}
        name={name}
        type={type ?? "text"}
        placeholder={placeholder}
        onBlur={name === "cep" && handleBlur}
      />
      {ErrorMessage && <ErrorMessage name={name} component={Error} />}
    </BoxFormItem>
  );
};

export default Input;
