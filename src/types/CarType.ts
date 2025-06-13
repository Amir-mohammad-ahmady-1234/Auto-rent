export interface TCar {
  id: number;
  image: string;
  title: string;
  brand: string;
  type: string[];
  model: string;
  dailyPrice: string;
  monthlyPrice: string;
  deposit: string;
  maxPassenger: number;
  minDriverAge: number;
  maxBag: number;
  rate: number;
  images: string[];
  details: {
    title: string;
    icon: string;
    descriptionWithIcon: string; // یا هر اسم دلخواهی
  }[];
  features: {
    title: string;
    icon: string;
  }[];
}
