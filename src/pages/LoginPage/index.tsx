import React from "react";
import { BoxLogin } from "../../components/BoxLogin";
import { BoxMenssage } from "../../components/BoxMenssage";
import { Logo } from "../../components/Logo";
import { StyledLoginPage } from "./style";

export const LoginPage = () => {
  return (
    <StyledLoginPage>
      <div>
        <Logo />
        <BoxMenssage />
      </div>

      <BoxLogin />
    </StyledLoginPage>
  );
};
