import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { ICartContext, ICartContextProps, IProduct } from "./types";

export const CartContext = createContext({} as ICartContext);

export const CartProvider = ({ children }: ICartContextProps) => {
  const [products, setProducts] = useState([] as IProduct[]);
  const [filteredProducts, setFilteredProducts] = useState([] as IProduct[]);
  const [currentSale, setCurrentSale] = useState([] as IProduct[]);

  const [userAuthorization, setUserAuthorization] = useState(false);
  const [modalCartVisible, setModalCartVisible] = useState(false);
  const [globalLoading, setGlobalLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      const token = localStorage.getItem("@TOKEN");

      setGlobalLoading(true);

      try {
        const response = await api.get("/products", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        setUserAuthorization(true);
        setProducts(response.data);
      } catch (error) {
        console.log(error);
        setUserAuthorization(false);
      } finally {
        setGlobalLoading(false);
      }
    };
    getProducts();
  }, []);

  const logOut = () => {
    localStorage.removeItem("@TOKEN");
    setUserAuthorization(false);
  };

  return (
    <CartContext.Provider
      value={{
        products,
        filteredProducts,
        setFilteredProducts,
        currentSale,
        setCurrentSale,
        userAuthorization,
        setUserAuthorization,
        modalCartVisible,
        setModalCartVisible,
        globalLoading,
        logOut,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
