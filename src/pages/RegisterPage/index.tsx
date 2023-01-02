import React from "react";
import { BoxMenssage } from "../../components/BoxMenssage";
import { BoxRegister } from "../../components/BoxRegister";
import { StyledLogo } from "../../components/Logo/style";
import { StyledRegisterPage } from "./style";

export const RegisterPage = () => {
  return (
    <StyledRegisterPage>
      <div>
        <StyledLogo Size="one" />
        <BoxMenssage />
      </div>

      <BoxRegister />
    </StyledRegisterPage>
  );
};
