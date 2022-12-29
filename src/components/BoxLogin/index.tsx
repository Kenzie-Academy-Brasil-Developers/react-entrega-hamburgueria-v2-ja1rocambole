import React, { useContext } from "react";
import { StyledButton } from "../../styles/Button";
import { ButtonLink } from "../ButtonLink";
import { StyledText } from "../Text/style";
import { StyledTitle } from "../Title/style";
import { StyledBoxLogin } from "./style";

//
import { FormInput } from "../FormInput/inde";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./loginSchema";
import { UserContext } from "../../providers/UserContext";

export const BoxLogin = () => {
  const { login } = useContext(UserContext);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const submitLogin = (data: any) => {
    console.log(data);
    login(data);
  };

  return (
    <StyledBoxLogin>
      <StyledTitle tag="h2" title="three" color="var(--color-gray-100)">
        Login
      </StyledTitle>

      <form noValidate>
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

        <StyledButton
          button="default"
          buttonColor="green"
          onClick={handleSubmit(submitLogin)}
        >
          Logar
        </StyledButton>
      </form>

      <StyledText tag="p" Text="three" color="var(--color-gray-50)">
        Crie sua conta para saborear muitas delícias e matar sua fome!
      </StyledText>

      <ButtonLink />
    </StyledBoxLogin>
  );
};
