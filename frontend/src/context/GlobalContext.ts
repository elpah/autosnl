// import { type ICartItem } from 'interfaces/ICartItem';

import { createContext } from "react";

export type ICarData = {
  cartype: string;
  carBrand: string;
  carModel: string;
  carErd: string;
  carFuel: string;
  carTransmission: string;
  carCountry: string;
};

export interface IGlobalContext {
  carData: ICarData;
  setCarData: React.Dispatch<React.SetStateAction<ICarData>>; // Use React's type for setState
  //   withdrawInvestment: IWithdrawal;
  //   setWithdrawInvestment: (investment: IWithdrawal) => void;
  //   showShoppingCart: boolean;
  //   setShowShoppingCart: (show: boolean) => void;
}

export const GlobalContext = createContext<IGlobalContext>({
  carData: {
    cartype: "used",
    carBrand: "",
    carModel: "",
    carErd: "",
    carFuel: "",
    carTransmission: "",
    carCountry: "",
  },
  setCarData: (carData) => {},
  // setCarData: async((carData)) => {},
  //   shoppingCartItems: [],
  //   setShoppingCartItems: async (shoppingCartItems: ICartItem[]) => {},
  //   withdrawInvestment: {
  //     investment: undefined,
  //     withdrawAmount: 0,
  //   },
  //   setWithdrawInvestment: async (investment: IWithdrawal) => {},
  //   showShoppingCart: false,
  //   setShowShoppingCart: async (show: boolean) => {},
  //   showQuestionMarkPopup: false,
  //   setShowQuestionMarkPopup: (show: boolean) => {},
  //   showProfilePopup: false,
  //   setShowProfilePopup: (show: boolean) => {},
  //   showSelectProfilePopup: false,
  //   setShowSelectProfilePopup: (show: boolean) => {},
  //   showFundWalletPopup: false,
  //   setShowFundWalletPopup: (show: boolean) => {},
  //   showMoneriumNotAuthedPopup: false,
  //   setShowMoneriumNotAuthedPopup: (show: boolean) => {},
  //   showRetrieveFromWalletPopup: false,
  //   setShowRetrieveFromWalletPopup: (show: boolean) => {},
  //   showCurrencySwitchPopup: false,
  //   setShowCurrencySwitchPopup: (show: boolean) => {},
  //   showSelectLanguage: false,
  //   setShowSelectLanguage: (show: boolean) => {},
  //   showCheckout: false,
  //   setShowCheckout: async (show: boolean) => {},
  //   showWithdraw: false,
});
