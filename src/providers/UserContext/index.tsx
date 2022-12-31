import { createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import {
  IDataLogin,
  IDataRegister,
  IUserContext,
  IUserContextProps,
} from "./types";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserContextProps) => {
  const navigate = useNavigate();

  const login = async (data: IDataLogin) => {
    try {
      const response = await api.post("/login", data);
      localStorage.setItem("@TOKEN", response.data.accessToken);
      toast.success("Login feito com sucesso!");

      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (error) {
      console.log(error);
      toast.error("Ops! Algo deu errado");
    }
  };

  const register = async (data: IDataRegister) => {
    try {
      await api.post("/users", data);
      toast.success("Cadastro feito com sucesso!");

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.log(error);
      toast.error("Ops! Algo deu errado");
    }
  };

  useEffect(() => {
    const userAuthorization = async () => {
      const token = localStorage.getItem("@TOKEN");

      try {
        await api.get("/products", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
      } catch (error) {
        console.log(error);
      }
    };
    userAuthorization();
  }, []);

  return (
    <UserContext.Provider value={{ login, register }}>
      {children}
    </UserContext.Provider>
  );
};
