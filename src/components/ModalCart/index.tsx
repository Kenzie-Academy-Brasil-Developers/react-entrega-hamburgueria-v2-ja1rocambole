import React, { useContext } from "react";
import { CartContext } from "../../providers/CartContext";
import { StyledButton } from "../../styles/Button";
import { ModalCartProduct } from "../ModalCartProduct";
import { StyledText } from "../Text/style";
import { StyledTitle } from "../Title/style";
import { StyledModalCart } from "./style";

export const ModalCart = () => {
  const { currentSale, setCurrentSale, setModalCartVisible } =
    useContext(CartContext);

  const clearCurrentSale = () => {
    setCurrentSale([]);
  };

  const totalPrice = currentSale.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0
  );

  return (
    <StyledModalCart>
      <div>
        <div className="modal-title">
          <StyledTitle tag="h2" title="three" color="var(--white-fixed)">
            Carrinho de compras
          </StyledTitle>

          <button onClick={() => setModalCartVisible(false)}>x</button>
        </div>
        {/*  */}
        <div className="modal-content">
          {currentSale.length <= 0 ? (
            <div className="cart-empty">
              <StyledTitle tag="h4" title="three" color="var(--color-gray-100)">
                Sua sacola está vazia
              </StyledTitle>

              <StyledText tag="p" Text="one" color="var(--color-gray-50)">
                Adicione itens
              </StyledText>
            </div>
          ) : (
            <>
              <ul>
                {currentSale.map((cartProduct) => (
                  <ModalCartProduct
                    id={cartProduct.id}
                    img={cartProduct.img}
                    name={cartProduct.name}
                  />
                ))}
              </ul>

              <hr />

              <div>
                <StyledText tag="p" Text="two" color="var(--color-gray-100)">
                  Total
                </StyledText>
                <StyledText tag="p" Text="two" color="var(--color-gray-50)">
                  {totalPrice.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}{" "}
                </StyledText>
              </div>

              <StyledButton
                button="default"
                buttonColor="white"
                onClick={() => clearCurrentSale()}
              >
                Remover todos
              </StyledButton>
            </>
          )}
        </div>
      </div>
    </StyledModalCart>
  );
};
