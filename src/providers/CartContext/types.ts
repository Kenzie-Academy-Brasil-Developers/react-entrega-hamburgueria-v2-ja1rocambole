export interface ICartContextProps {
  children: React.ReactNode;
}

export interface ICartContext {
  userAuthorization: boolean;
  setUserAuthorization: React.Dispatch<React.SetStateAction<boolean>>;
  globalLoading: boolean;
}
