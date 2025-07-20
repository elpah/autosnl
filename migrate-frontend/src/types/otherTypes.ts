type CarOptions = {
  airbags?: string[];
  coolingAndHeating?: string[];
  security?: string[];
  entertainment?: string[];
  comfortInterior?: string[];
  comfortExterior?: string[];
  emission?: string[];
  other?: string[];
  exterior?: string[];
  interior?: string[];
  sales?: string[];
  safety?: string[];
  lighting?: string[];
};

type IDealer = {
  dealerId: string;
  dealerName: string;
  dealerAddress: string;
  dealerPhone: string;
  dealerEmail: string;
};

type ICarPageProps = {
  coverImages: string[];
  carNameModel: string;
  inc_btw_price: string;
  excl_btw_price: string;
  excl_bpm_btw_price: string;
  carMileage: string;
  carTransmission: string;
  carFuel: string;
  carPower: string;
  carEngineCapacity: string;
  carERD: string;
  carVat: string;
  carColor: string;
  carVanish: string;
  carBody: string;
  carNumberOfDoors: string;
  carWeight: string;
  damages: { title: string; text: string }[];
  options: CarOptions;
  dealerInfo?: IDealer;
  handleButtonClick: () => void;
};

type IDealerPageProps = {
  dealerNameAndTotal: string;
  dealer: IDealer;
  carList: React.ReactNode;
  totalCars: number;
  loadingContainer: React.ReactNode;
  isLoading: boolean;
};

type IAdvancedProps = {
  carList: React.ReactNode;
  loadingContainer: React.ReactNode;
  isLoading: boolean;
  header: string;
};

type NavProps = {
  showLanguageSelector: boolean;
  setShowLanguageSelector: React.Dispatch<React.SetStateAction<boolean>>;

  filteredSuggestions: string[];
  languageSelectorRef: React.RefObject<HTMLDivElement | null>;
  suggestionsRef?: React.RefObject<HTMLDivElement | null>;
  queryWord?: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectSuggestion: (suggestion: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  selectedIndex?: number;
  setSelectedIndex?: React.Dispatch<React.SetStateAction<number>>;
  refTracker: boolean;
  setRefTracker: React.Dispatch<React.SetStateAction<boolean>>;

  changeLanguage: (lang: "en" | "nl" | "ua" | "ru") => void;
  flags: {
    en: string;
    nl: string;
    ru: string;
    ua: string;
  };
  selected_flag: string;
};

export {
  type CarOptions,
  type IDealer,
  type ICarPageProps,
  type IDealerPageProps,
  type IAdvancedProps,
  type NavProps,
};
