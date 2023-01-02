import React, { useContext, useState } from "react";
import { StyledInputSearche } from "./style";
import { StyledButton } from "../../styles/Button";
import searche from "../../assets/searche white.svg";
import { CartContext } from "../../providers/CartContext";

interface IInputSearche {
  className?: string;
}

export const InputSearche = ({ className }: IInputSearche) => {
  const { setFilteredProducts, products } = useContext(CartContext);

  const [input, setInput] = useState("");

  const searcheProducts = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setFilteredProducts(
      products.filter((product) => {
        const nameLow = product.name.toLowerCase();
        const nameLowNormalize = nameLow.normalize();

        const categoryLow = product.category.toLowerCase();
        const categoryLowNormalize = categoryLow.normalize();

        const inputLow = input.toLowerCase();
        const inputLowNormalize = inputLow.normalize();

        if (
          nameLowNormalize.includes(inputLowNormalize) ||
          categoryLowNormalize.includes(inputLowNormalize)
        ) {
          return true;
        }
        return false;
      })
    );
  };

  return (
    <StyledInputSearche className={className}>
      <input
        type="search"
        placeholder="Digitar Pesquisa"
        onChange={(event) => setInput(event.target.value)}
      />
      <StyledButton
        button="medium"
        buttonColor="green"
        onClick={(event) => searcheProducts(event)}
      >
        <img src={searche} alt="lupa" />
      </StyledButton>
    </StyledInputSearche>
  );
};
