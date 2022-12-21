import React from "react";
import { StyledInputSearche } from "./style";
import { StyledButton } from "../../styles/Button";
import searche from "../../assets/searche.svg";

export const InputSearche = () => {
  return (
    <StyledInputSearche>
      <input type="search" placeholder="Digitar Pesquisa" />
      <StyledButton button="medium" buttonColor="green">
        <img src={searche} alt="lupa" />
      </StyledButton>
    </StyledInputSearche>
  );
};
