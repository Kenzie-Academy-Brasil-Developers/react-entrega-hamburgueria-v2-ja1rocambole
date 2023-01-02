import React from "react";
import { StyledLogo } from "./style";

interface ILogo {
  className?: string;
}

export const Logo = ({ className }: ILogo) => {
  return (
    <h1 className={className}>
      Burguer <span>Kenzie</span>
    </h1>
  );
};
