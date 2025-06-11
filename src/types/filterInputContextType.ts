export interface IdefaultValue {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  maxPrice: string;
  setMaxPrice: React.Dispatch<React.SetStateAction<string>>;
  selectedBrands: string[];
  setSelectedBrands: React.Dispatch<React.SetStateAction<string[]>>;
  selectedCarType: string;
  setSelectedCarType: React.Dispatch<React.SetStateAction<string>>;
  selectedInsurance: 'basic' | 'full';
  setSelectedInsurance: React.Dispatch<React.SetStateAction<'basic' | 'full'>>;
  handleToggleRadio: () => void;
}
