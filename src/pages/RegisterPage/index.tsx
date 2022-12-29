import React from "react";
import { BoxMenssage } from "../../components/BoxMenssage";
import { BoxRegister } from "../../components/BoxRegister";
import { Logo } from "../../components/Logo";
import { StyledRegisterPage } from "./style";

export const RegisterPage = () => {
  return (
    <StyledRegisterPage>
      <div>
        <Logo />
        <BoxMenssage />
      </div>

      <BoxRegister />
    </StyledRegisterPage>
  );
};
