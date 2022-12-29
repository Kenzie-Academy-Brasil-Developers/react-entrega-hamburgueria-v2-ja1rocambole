import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";

interface IUserContextProps {
  children: React.ReactNode;
}

interface IUserContext {
  login: (data: IDataLogin) => Promise<void>;
}

interface IDataLogin {
  email: string;
  password: string;
}

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

  return (
    <UserContext.Provider value={{ login }}>{children}</UserContext.Provider>
  );
};
