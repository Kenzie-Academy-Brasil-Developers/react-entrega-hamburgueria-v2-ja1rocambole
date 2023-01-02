import React from "react";
import { BoxLogin } from "../../components/BoxLogin";
import { BoxMenssage } from "../../components/BoxMenssage";
import { StyledLogo } from "../../components/Logo/style";
import { StyledLoginPage } from "./style";

export const LoginPage = () => {
  return (
    <StyledLoginPage>
      <div>
        <StyledLogo Size="one" />
        <BoxMenssage />
      </div>

      <BoxLogin />
    </StyledLoginPage>
  );
};
