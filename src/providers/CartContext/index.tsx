import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { ICartContext, ICartContextProps } from "./types";

export const CartContext = createContext({} as ICartContext);

export const CartProvider = ({ children }: ICartContextProps) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const [userAuthorization, setUserAuthorization] = useState(false);
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

  return (
    <CartContext.Provider
      value={{
        userAuthorization,
        setUserAuthorization,
        globalLoading,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
