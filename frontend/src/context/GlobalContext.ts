// import { type ICartItem } from 'interfaces/ICartItem';
// import { type IInvestment } from 'interfaces/IInvestment';
// import { type IWithdrawal } from 'interfaces/IWithdrawal';
// import { type TokenState } from 'interfaces/TokenState';
import { createContext } from "react";

export interface IPortfolio {
  //   numberOfInvestments: number;
  //   totalInvestedValue: number;
  //   totalCurrentValue: number;
  //   performance: number;
  //   performancePercentage: number;
  //   averageRiskProfile: number;
}

export interface IGlobalContext {
  //   shoppingCartItems: ICartItem[];
  //   setShoppingCartItems: (shoppingCartItems: ICartItem[]) => void;
  //   withdrawInvestment: IWithdrawal;
  //   setWithdrawInvestment: (investment: IWithdrawal) => void;
  //   showShoppingCart: boolean;
  //   setShowShoppingCart: (show: boolean) => void;
  //   showQuestionMarkPopup: boolean;
  //   setShowQuestionMarkPopup: (show: boolean) => void;
  //   showProfilePopup: boolean;
  //   setShowProfilePopup: (show: boolean) => void;
  //   showSelectProfilePopup: boolean;
  //   setShowSelectProfilePopup: (show: boolean) => void;
  //   showFundWalletPopup: boolean;
  //   setShowFundWalletPopup: (show: boolean) => void;
  //   showMoneriumNotAuthedPopup: boolean;
  //   setShowMoneriumNotAuthedPopup: (show: boolean) => void;
  //   showRetrieveFromWalletPopup: boolean;
  //   setShowRetrieveFromWalletPopup: (show: boolean) => void;
  //   showSelectLanguage: boolean;
  //   setShowSelectLanguage: (show: boolean) => void;
  //   showCheckout: boolean;
  //   setShowCheckout: (show: boolean) => void;
  //   showWithdraw: boolean;
  //   setShowWithdraw: (show: boolean) => void;
  //   expandShoppingCart: boolean;
  //   setExpandShoppingCart: (show: boolean) => void;
  //   portfolio: IPortfolio;
  //   setPortfolio: (portfolio: IPortfolio) => void;
  //   addToPortfolio: (shoppingCartItems: ICartItem[]) => void;
  //   tokenState: TokenState;
  //   setTokenState: (tokenState: TokenState) => void;
  //   balance: number;
  //   setBalance: (balance: number) => void;
  //   account: string;
  //   setAccount: (account: string) => void;
  //   showGuidedTour: boolean;
  //   setShowGuidedTour: (show: boolean) => void;
  //   tourSteps: any[];
  //   setTourSteps: (steps: any[]) => void;
  //   showLogout: boolean;
  //   setShowLogout: (show: boolean) => void;
  //   startedGuidedTour: boolean;
  //   setStartedGuidedTour: (show: boolean) => void;
  //   selectedProfile: number;
  //   setSelectedProfile: (selectedProfile: number) => void;
  //   showShareFeedbackPopup: boolean;
  //   setShowShareFeedbackPopup: (show: boolean) => void;
  //   showCurrencySwitchPopup: boolean;
  //   showShareFeedbackForm: boolean;
  //   setShowShareFeedbackForm: (show: boolean) => void;
  //   setShowCurrencySwitchPopup: (show: boolean) => void;
  //   currency: number;
  //   setCurrency: (currency: number) => void;
  //   displayBalance: number;
  //   setDisplayBalance: (displayBalance: number) => void;
  //   displayInvestedValue: number;
  //   setDisplayInvestedValue: (displayInvestedValue: number) => void;
  //   displayPerformance: number;
  //   setDisplayPerformance: (displayPerformance: number) => void;
}

export const GLobalContext = createContext<IGlobalContext>({
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
  //   setShowWithdraw: async (show: boolean) => {},
  //   expandShoppingCart: false,
  //   setExpandShoppingCart: (show: boolean) => {},
  //   portfolio: {
  //     numberOfInvestments: 0,
  //     totalInvestedValue: 0,
  //     totalCurrentValue: 0,
  //     performance: 0,
  //     performancePercentage: 0,
  //     averageRiskProfile: 0,
  //     investments: [],
  //   },
  //   setPortfolio: (portfolio: IPortfolio) => {},
  //   addToPortfolio: async (shoppingCartItems: ICartItem[]) => {},
  //   tokenState: {},
  //   setTokenState: (tokenState: TokenState) => {},
  //   balance: 0,
  //   setBalance: (balance: number) => {},
  //   account: "",
  //   setAccount: (account: string) => {},
  //   showGuidedTour: false,
  //   setShowGuidedTour: (show: boolean) => {},
  //   tourSteps: [],
  //   setTourSteps: (steps: any[]) => {},
  //   showLogout: false,
  //   setShowLogout: (show: boolean) => {},
  //   startedGuidedTour: false,
  //   setStartedGuidedTour: (show: boolean) => {},
  //   selectedProfile: 0,
  //   setSelectedProfile: (selectedProfile: number) => {},
  //   showShareFeedbackPopup: false,
  //   setShowShareFeedbackPopup: (show: boolean) => {},
  //   showShareFeedbackForm: false,
  //   setShowShareFeedbackForm: (show: boolean) => {},
  //   currency: 0,
  //   setCurrency: (currency: number) => {},
  //   displayBalance: 0,
  //   setDisplayBalance(displayBalance: number) {},
  //   displayInvestedValue: 0,
  //   setDisplayInvestedValue: (displayBalance: number) => {},
  //   displayPerformance: 0,
  //   setDisplayPerformance: (displayPerformance: number) => {},
});
