import React, { useContext, useState } from "react";
import { CartContext } from "../../providers/CartContext";
import { ButtonImage } from "../ButtonImage";
import { InputSearche } from "../InputSearche";
import { StyledLogo } from "../Logo/style";
import { StyledHeader } from "./style";

export const Header = () => {
  const { logOut, setModalCartVisible } = useContext(CartContext);

  const [inputSearche, setInputSearche] = useState(false);

  return (
    <StyledHeader>
      {inputSearche ? (
        <InputSearche className="" />
      ) : (
        <div className="container">
          <StyledLogo Size="two" />

          <div>
            <InputSearche className="input-searche-desk" />

            <ButtonImage
              className="searche-button"
              imageButton="searche"
              onClick={() => setInputSearche(true)}
            />
            <ButtonImage
              imageButton="cart"
              onClick={() => setModalCartVisible(true)}
            />
            <ButtonImage imageButton="logOut" onClick={() => logOut()} />
          </div>
        </div>
      )}
    </StyledHeader>
  );
};
