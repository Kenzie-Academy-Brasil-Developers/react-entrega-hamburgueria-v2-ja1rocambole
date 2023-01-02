export interface IUserContextProps {
  children: React.ReactNode;
}

export interface IUserContext {
  login: (data: IDataLogin) => Promise<void>;
  register: (data: IDataRegister) => Promise<void>;
}

export interface IDataLogin {
  email: string;
  password: string;
}

export interface IDataRegister {
  name: string;
  email: string;
  password: string;
}
