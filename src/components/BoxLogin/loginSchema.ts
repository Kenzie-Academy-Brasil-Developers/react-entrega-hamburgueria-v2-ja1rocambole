import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Campo obrigatório")
    .email("Digite um email valido"),
  password: yup.string().required("Campo obrigatório"),
});
