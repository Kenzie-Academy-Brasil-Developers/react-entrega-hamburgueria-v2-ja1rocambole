import React, { useContext } from "react";
import { FormInput } from "../FormInput/inde";
import { StyledTitle } from "../Title/style";
import { StyledBoxRegister } from "./style";

import { useForm } from "react-hook-form";
import { StyledButton } from "../../styles/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./registerSchema";
import { Link } from "react-router-dom";
import { UserContext } from "../../providers/UserContext";

export const BoxRegister = () => {
  const { register } = useContext(UserContext);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const submitRegister = (data: any) => {
    const dataRegister = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    register(dataRegister);
  };
  return (
    <StyledBoxRegister>
      <div>
        <StyledTitle tag="h2" title="three" color="var(--color-gray-100)">
          Cadastro
        </StyledTitle>

        <Link to="/login">Retornar para o login</Link>
      </div>

      <form noValidate>
        <FormInput
          control={control}
          name="name"
          type="text"
          label="Nome"
          errorMenssage={errors.email ? errors.email.message : null}
        />

        <FormInput
          control={control}
          name="email"
          type="email"
          label="E-mail"
          errorMenssage={errors.email ? errors.email.message : null}
        />

        <FormInput
          control={control}
          name="password"
          type="password"
          label="Senha"
          errorMenssage={errors.password ? errors.password.message : null}
        />
        <FormInput
          control={control}
          name="confirm"
          type="password"
          label="Confirmar Senha"
          errorMenssage={errors.confirm ? errors.confirm.message : null}
        />

        <StyledButton
          button="default"
          buttonColor="white"
          onClick={handleSubmit(submitRegister)}
        >
          Cadastrar
        </StyledButton>
      </form>
    </StyledBoxRegister>
  );
};
