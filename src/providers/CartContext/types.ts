export interface ICartContextProps {
  children: React.ReactNode;
}

export interface ICartContext {
  products: IProduct[];

  filteredProducts: IProduct[];
  setFilteredProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;

  currentSale: IProduct[];
  setCurrentSale: React.Dispatch<React.SetStateAction<IProduct[]>>;

  userAuthorization: boolean;
  setUserAuthorization: React.Dispatch<React.SetStateAction<boolean>>;

  modalCartVisible: boolean;
  setModalCartVisible: React.Dispatch<React.SetStateAction<boolean>>;

  globalLoading: boolean;
  logOut: () => void;
}

export interface IProduct {
  category: string;
  id: number;
  img: string;
  name: string;
  price: number;
}
