import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { CartContext } from "../../providers/CartContext";
import { StyledDashboardPage } from "./style";

import { StyledProductsList } from "../../components/ProductsList/style";
import { Product } from "../../components/Product";
import { ModalCart } from "../../components/ModalCart";

export const DashBoardPage = () => {
  const {
    userAuthorization,
    globalLoading,
    products,
    filteredProducts,
    modalCartVisible,
  } = useContext(CartContext);

  if (globalLoading) {
    return null;
  }
  if (userAuthorization) {
    return (
      <StyledDashboardPage>
        {modalCartVisible ? <ModalCart /> : null}

        <Header />
        <div className="container">
          <StyledProductsList>
            {filteredProducts.length > 0
              ? filteredProducts.map((product) => (
                  <Product
                    key={product.id}
                    id={product.id}
                    img={product.img}
                    name={product.name}
                    category={product.category}
                    price={product.price}
                  />
                ))
              : products.map((product) => (
                  <Product
                    key={product.id}
                    id={product.id}
                    img={product.img}
                    name={product.name}
                    category={product.category}
                    price={product.price}
                  />
                ))}

            {/* {products.map((product) => (
              <Product
                key={product.id}
                id={product.id}
                img={product.img}
                name={product.name}
                category={product.category}
                price={product.price}
              />
            ))} */}
          </StyledProductsList>
        </div>
      </StyledDashboardPage>
    );
  } else {
    return <Navigate to="/login" />;
  }
};
